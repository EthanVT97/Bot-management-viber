'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Bot, 
  Users, 
  MessageSquare, 
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

interface DashboardStats {
  activeBots: number;
  totalUsers: number;
  messagesHandled: number;
  systemHealth: string;
  tokenStatus: string;
  uptime: string;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    activeBots: 0,
    totalUsers: 0,
    messagesHandled: 0,
    systemHealth: 'healthy',
    tokenStatus: 'active',
    uptime: '99.9%'
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading dashboard data
    const timer = setTimeout(() => {
      setStats({
        activeBots: 3,
        totalUsers: 1247,
        messagesHandled: 15890,
        systemHealth: 'healthy',
        tokenStatus: 'active',
        uptime: '99.9%'
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    {
      title: 'Active Bots',
      value: stats.activeBots,
      icon: Bot,
      color: 'text-viber-primary',
      bgColor: 'bg-viber-light',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+5.4%',
      changeType: 'positive'
    },
    {
      title: 'Messages Handled',
      value: stats.messagesHandled.toLocaleString(),
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+23%',
      changeType: 'positive'
    },
    {
      title: 'System Uptime',
      value: stats.uptime,
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '0.1%',
      changeType: 'neutral'
    }
  ];

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="spinner"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Monitor your Viber bot performance and system health
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-admin-success" />
              <span className="text-sm font-medium text-admin-success">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`h-4 w-4 ${
                      stat.changeType === 'positive' ? 'text-admin-success' : 
                      stat.changeType === 'negative' ? 'text-admin-error' : 'text-gray-400'
                    }`} />
                    <span className={`text-sm ml-1 ${
                      stat.changeType === 'positive' ? 'text-admin-success' : 
                      stat.changeType === 'negative' ? 'text-admin-error' : 'text-gray-400'
                    }`}>
                      {stat.change} from last month
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Token Status */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Token Status</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Primary Token</span>
                <span className="status-active">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Backup Token</span>
                <span className="status-active">Ready</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Last Rotation</span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-admin-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Bot "Customer Support" activated</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-admin-info rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Broadcast campaign sent to 1,200 users</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-admin-warning rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Token rotation scheduled</p>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-admin-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">System health check passed</p>
                  <p className="text-xs text-gray-500">6 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn-primary flex items-center justify-center space-x-2 p-4">
              <Bot className="h-5 w-5" />
              <span>Create New Bot</span>
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2 p-4">
              <MessageSquare className="h-5 w-5" />
              <span>Send Broadcast</span>
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2 p-4">
              <Activity className="h-5 w-5" />
              <span>View Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

