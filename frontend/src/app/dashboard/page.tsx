'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout';
import { KnowledgeGraph } from '@/components/knowledge-graph';
import { AnalyticsDashboard } from '@/components/analytics-dashboard';
import { Observability } from '@/components/observability';
import { ChatInterface } from '@/components/chat-interface';
import { DocumentManager } from '@/components/document-manager';
import { FileText, Users, Activity, Clock, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'documents', name: 'Documents' },
    { id: 'knowledge', name: 'Knowledge Graph' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'observability', name: 'Observability' },
    { id: 'chat', name: 'Chat' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">AegisAI Dashboard</h1>
          <p className="text-gray-500">Welcome to your knowledge management system</p>
        </div>

        <div className="border-b">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div>
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
                    <FileText className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,248</div>
                    <p className="text-xs text-green-500">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">243</div>
                    <p className="text-xs text-green-500">+5% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Chat Sessions</CardTitle>
                    <Activity className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,892</div>
                    <p className="text-xs text-red-500">-3% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                    <Clock className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.4s</div>
                    <p className="text-xs text-green-500">-0.3s from last month</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">New document uploaded</p>
                            <p className="text-sm text-gray-500">Annual Report 2023.pdf</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">2 min ago</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <Activity className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Chat session completed</p>
                            <p className="text-sm text-gray-500">AI assistant query</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">15 min ago</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                            <TrendingUp className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">Knowledge graph updated</p>
                            <p className="text-sm text-gray-500">New relationship added</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">1 hour ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Knowledge Graph Nodes</span>
                        <span className="font-bold">142</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Active Connections</span>
                        <span className="font-bold">287</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Processing Queue</span>
                        <span className="font-bold">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>System Uptime</span>
                        <span className="font-bold">99.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'documents' && <DocumentManager />}
          {activeTab === 'knowledge' && <KnowledgeGraph />}
          {activeTab === 'analytics' && <AnalyticsDashboard />}
          {activeTab === 'observability' && <Observability />}
          {activeTab === 'chat' && <ChatInterface />}
        </div>
      </div>
    </Layout>
  );
}