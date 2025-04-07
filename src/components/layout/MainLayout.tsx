import React from 'react';
import { Menu, X, Bell, MessageCircle } from 'lucide-react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ChatbotButton from '../chatbot/ChatbotButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className={`fixed inset-0 bg-gray-900/80 ${sidebarOpen ? 'block' : 'hidden'}`} />
        <div
          className={`fixed inset-0 flex ${sidebarOpen ? 'block' : 'hidden'}`}
          onClick={() => setSidebarOpen(false)}
        >
          <div className="relative mr-16 flex w-full max-w-xs flex-1">
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button type="button" onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* Floating Chatbot Button */}
      <ChatbotButton />
    </div>
  );
}