import React, { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { Inventory } from '@/components/Inventory';
import { Sales } from '@/components/Sales';
import { Customers } from '@/components/Customers';
import { Reports } from '@/components/Reports';
import { Diamond, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <div className="min-h-screen bg-background relative">
        {/* Background decoration */}
        <div className="fixed inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-silver-400/5 pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="flex w-full relative">
          {/* Desktop Sidebar */}
          <Sidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            className="hidden lg:flex"
          />

          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
              <div className="absolute left-0 top-0 h-full">
                <Sidebar 
                  activeTab={activeTab} 
                  onTabChange={(tab) => {
                    setActiveTab(tab);
                    setSidebarOpen(false);
                  }}
                />
              </div>
            </div>
          )}
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Navigation */}
            <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 px-6 py-4 flex justify-between items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-silver-400/5"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center luxury-glow lg:hidden">
                    <Diamond className="h-6 w-6 text-luxury-black" />
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                      JewelryPro Dashboard
                    </h1>
                    <p className="text-sm text-muted-foreground">Manage your jewelry business with AI</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <LanguageSelector />
              </div>
            </header>

            {/* Mobile Navigation */}
            <div className="lg:hidden bg-card/60 backdrop-blur-sm border-b border-border/30 p-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {['dashboard', 'inventory', 'sales', 'customers', 'reports'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 relative overflow-hidden ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-luxury-black shadow-gold-glow' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {activeTab === tab && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
                    )}
                    <span className="relative z-10">
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <main className="flex-1 p-6 overflow-auto relative">
              <div className="max-w-7xl mx-auto">
                {renderContent()}
              </div>
            </main>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;