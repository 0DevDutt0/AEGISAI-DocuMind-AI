'use client';

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalDocuments: 0,
    totalEntities: 0,
    totalUsers: 0,
    avgProcessingTime: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching dashboard stats
    setTimeout(() => {
      setStats({
        totalDocuments: 42,
        totalEntities: 128,
        totalUsers: 15,
        avgProcessingTime: 2.3
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="border rounded-lg p-6">
          <div className="text-3xl font-bold text-indigo-600">{stats.totalDocuments}</div>
          <div className="text-gray-600">Total Documents</div>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl font-bold text-indigo-600">{stats.totalEntities}</div>
          <div className="text-gray-600">Total Entities</div>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl font-bold text-indigo-600">{stats.totalUsers}</div>
          <div className="text-gray-600">Active Users</div>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl font-bold text-indigo-600">{stats.avgProcessingTime}s</div>
          <div className="text-gray-600">Avg Processing Time</div>
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b pb-2">
            <div>Document processed: Annual Report.pdf</div>
            <div className="text-sm text-gray-500">2 minutes ago</div>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <div>Entity extracted: John Smith</div>
            <div className="text-sm text-gray-500">5 minutes ago</div>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <div>Chat query: What is the company's revenue?</div>
            <div className="text-sm text-gray-500">10 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}