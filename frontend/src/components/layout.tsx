'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LayoutDashboard,
  FileText,
  Database,
  Activity,
  MessageSquare,
  Settings,
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Knowledge Graph', href: '/knowledge', icon: Database },
    { name: 'Observability', href: '/observability', icon: Activity },
    { name: 'Chat Interface', href: '/chat', icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h1 className="text-xl font-bold">AegisAI</h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r bg-white">
        <div className="flex items-center p-4 border-b">
          <h1 className="text-xl font-bold">AegisAI</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start mt-2">
            <User className="w-5 h-5 mr-3" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start mt-2">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden mr-2"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Refresh
              </Button>
              <Button size="sm">
                Export Data
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}