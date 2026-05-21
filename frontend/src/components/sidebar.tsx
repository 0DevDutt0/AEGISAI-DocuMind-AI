'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Database,
  BarChart3,
  Activity,
  Settings,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      href: '/',
    },
    {
      name: 'Chat',
      icon: MessageSquare,
      href: '/chat',
    },
    {
      name: 'Documents',
      icon: FileText,
      href: '/documents',
    },
    {
      name: 'Knowledge Graph',
      icon: Database,
      href: '/knowledge',
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      href: '/analytics',
    },
    {
      name: 'Observability',
      icon: Activity,
      href: '/observability',
    },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-30 bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {isOpen ? (
            <h1 className="text-xl font-bold">AegisAI</h1>
          ) : (
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-white hover:bg-gray-800"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${isOpen ? 'px-4' : 'px-2'}`}
                  >
                    <item.icon className="w-5 h-5" />
                    {isOpen && <span className="ml-3">{item.name}</span>}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="w-5 h-5" />
            {isOpen && <span className="ml-3">Settings</span>}
          </Button>
        </div>
      </div>
    </div>
  );
}