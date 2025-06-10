
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
  Database 
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
    <div className={cn("w-64 bg-card border-r border-border flex flex-col", className)}>
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
            <Diamond className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">JewelryPro</h2>
            <p className="text-sm text-muted-foreground">AI-Powered</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12 text-left",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{t(item.key)}</span>
            </Button>
          );
        })}
      </nav>
    </div>
  );
};
