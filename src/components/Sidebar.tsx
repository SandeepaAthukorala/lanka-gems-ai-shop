import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  User, 
  Gem, 
  Diamond, 
  Clock,
  FileText,
  Database,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const menuItems = [
  { id: 'dashboard', icon: Database, key: 'dashboard' },
  { id: 'inventory', icon: Gem, key: 'inventory' },
  { id: 'sales', icon: Clock, key: 'sales' },
  { id: 'customers', icon: User, key: 'customers' },
  { id: 'reports', icon: FileText, key: 'reports' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, className }) => {
  const { t } = useLanguage();

  return (
    <div className={cn("w-64 bg-sidebar border-r border-sidebar-border flex flex-col relative overflow-hidden", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-silver-400/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"></div>
      
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center luxury-glow relative">
            <Diamond className="h-7 w-7 text-luxury-black" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              JewelryPro
            </h2>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-gold-400" />
              AI-Powered
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 relative">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 h-12 text-left relative overflow-hidden transition-all duration-300 group",
                isActive 
                  ? "bg-gradient-to-r from-gold-400/20 to-gold-600/20 text-gold-300 shadow-lg border border-gold-400/30" 
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
              )}
              onClick={() => onTabChange(item.id)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 to-gold-600 rounded-r-full"></div>
              )}
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon container */}
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10",
                isActive 
                  ? "bg-gold-400/20 text-gold-400" 
                  : "group-hover:bg-sidebar-accent/30"
              )}>
                <Icon className="h-5 w-5" />
              </div>
              
              {/* Text */}
              <span className="font-medium relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                {t(item.key)}
              </span>
              
              {/* Shimmer effect for active item */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
              )}
            </Button>
          );
        })}
      </nav>

      {/* Footer decoration */}
      <div className="p-4 border-t border-sidebar-border relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-4"></div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Luxury Jewelry Management
          </p>
        </div>
      </div>
    </div>
  );
};