'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Button } from '@/components/ui/button';
import { Activity, AlertTriangle, CheckCircle, Clock, Server } from 'lucide-react';

interface SystemMetric {
  name: string;
  value: number;
  status: 'healthy' | 'warning' | 'critical';
}

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'debug';
  message: string;
  service: string;
}

export function Observability() {
  const [systemMetrics, setSystemMetrics] = useState<SystemMetric[]>([]);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading observability data
    const timer = setTimeout(() => {
      setSystemMetrics([
        { name: 'CPU Usage', value: 65, status: 'healthy' },
        { name: 'Memory Usage', value: 42, status: 'healthy' },
        { name: 'Disk Usage', value: 78, status: 'warning' },
        { name: 'Network I/O', value: 32, status: 'healthy' },
        { name: 'Response Time', value: 2400, status: 'warning' },
        { name: 'Error Rate', value: 0.2, status: 'healthy' },
      ]);

      setLogEntries([
        { id: '1', timestamp: '2023-12-15 14:30:22', level: 'info', message: 'System started successfully', service: 'main-service' },
        { id: '2', timestamp: '2023-12-15 14:31:15', level: 'info', message: 'New document processed', service: 'document-processor' },
        { id: '3', timestamp: '2023-12-15 14:32:47', level: 'warning', message: 'Disk usage high', service: 'storage-service' },
        { id: '4', timestamp: '2023-12-15 14:33:01', level: 'info', message: 'Knowledge graph updated', service: 'knowledge-graph' },
        { id: '5', timestamp: '2023-12-15 14:34:23', level: 'debug', message: 'Cache hit', service: 'cache-service' },
        { id: '6', timestamp: '2023-12-15 14:35:18', level: 'info', message: 'Chat session completed', service: 'chat-service' },
      ]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'text-red-500';
      case 'warning': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      case 'debug': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">System Observability</h2>
        <p className="text-gray-500">Monitor system health and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {systemMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{metric.name}</span>
                <span className={getStatusColor(metric.status)}>
                  {metric.status === 'healthy' && <CheckCircle className="w-5 h-5" />}
                  {metric.status === 'warning' && <AlertTriangle className="w-5 h-5" />}
                  {metric.status === 'critical' && <AlertTriangle className="w-5 h-5" />}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">
                  {metric.name === 'Response Time' ? `${metric.value}ms` : `${metric.value}${metric.name.includes('Usage') ? '%' : ''}`}
                </div>
                <div className="w-16 h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[metric]}>
                      <Bar dataKey="value" fill={metric.status === 'healthy' ? '#10b981' : metric.status === 'warning' ? '#f59e0b' : '#ef4444'} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Metrics Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { time: '00:00', cpu: 45, memory: 35, disk: 60 },
                    { time: '04:00', cpu: 52, memory: 40, disk: 65 },
                    { time: '08:00', cpu: 60, memory: 45, disk: 70 },
                    { time: '12:00', cpu: 55, memory: 42, disk: 75 },
                    { time: '16:00', cpu: 68, memory: 48, disk: 78 },
                    { time: '20:00', cpu: 62, memory: 44, disk: 72 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cpu" stroke="#3b82f6" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="memory" stroke="#10b981" />
                  <Line type="monotone" dataKey="disk" stroke="#f59e0b" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Log Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {logEntries.map((log) => (
                <div key={log.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <div className={`mr-3 mt-1 ${getLevelColor(log.level)}`}>
                    {log.level === 'error' && <AlertTriangle className="w-4 h-4" />}
                    {log.level === 'warning' && <AlertTriangle className="w-4 h-4" />}
                    {log.level === 'info' && <Activity className="w-4 h-4" />}
                    {log.level === 'debug' && <Clock className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{log.message}</span>
                      <span className="text-sm text-gray-500">{log.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">{log.service}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(log.level)} bg-opacity-20`}>
                        {log.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Health Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <h3 className="font-medium">All Services Healthy</h3>
                <p className="text-sm text-gray-500">All 12 services are running normally</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <h3 className="font-medium">Warning: Disk Usage</h3>
                <p className="text-sm text-gray-500">Storage usage at 78%</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <Server className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <h3 className="font-medium">System Uptime</h3>
                <p className="text-sm text-gray-500">99.8% uptime this week</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}