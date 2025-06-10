
import React, { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { Inventory } from '@/components/Inventory';
import { Sales } from '@/components/Sales';
import { Customers } from '@/components/Customers';
import { Reports } from '@/components/Reports';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <Inventory />;
      case 'sales':
        return <Sales />;
      case 'customers':
        return <Customers />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <div className="flex w-full">
          {/* Sidebar */}
          <Sidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            className="hidden lg:flex"
          />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Top Navigation */}
            <header className="bg-card border-b border-border px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="lg:hidden">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-semibold text-foreground">JewelryPro Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Manage your jewelry business with AI</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <LanguageSelector />
              </div>
            </header>

            {/* Mobile Navigation */}
            <div className="lg:hidden bg-card border-b border-border p-4">
              <div className="flex gap-2 overflow-x-auto">
                {['dashboard', 'inventory', 'sales', 'customers', 'reports'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <main className="flex-1 p-6 overflow-auto">
              {renderContent()}
            </main>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
