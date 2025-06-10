
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Clock,
  Gem,
  User,
  Plus,
  FileText,
  Diamond,
  Timer
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      title: t('todaysSales'),
      value: 'Rs 2,45,000',
      icon: Clock,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      title: t('totalInventory'),
      value: '1,247',
      icon: Gem,
      color: 'text-gold-600',
      bgColor: 'bg-gold-50',
    },
    {
      title: t('activeCustomers'),
      value: '89',
      icon: User,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: t('lowStock'),
      value: '12',
      icon: Timer,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  const recentSales = [
    { id: 1, customer: 'Sunil Perera', item: '22K Gold Ring', amount: 'Rs 85,000', time: '2 hours ago' },
    { id: 2, customer: 'Kamala Silva', item: 'Diamond Necklace', amount: 'Rs 2,25,000', time: '3 hours ago' },
    { id: 3, customer: 'Ravi Fernando', item: 'Silver Bracelet', amount: 'Rs 15,000', time: '5 hours ago' },
  ];

  const quickActions = [
    { label: t('addNewItem'), icon: Plus, color: 'bg-emerald-500 hover:bg-emerald-600' },
    { label: t('newSale'), icon: Clock, color: 'bg-gold-500 hover:bg-gold-600' },
    { label: t('viewReports'), icon: FileText, color: 'bg-blue-500 hover:bg-blue-600' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{t('welcomeBack')}</h1>
            <p className="text-muted-foreground mt-1">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <Diamond className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Sales */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {t('recentSales')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{sale.customer}</p>
                      <p className="text-sm text-muted-foreground">{sale.item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{sale.amount}</p>
                    <p className="text-sm text-muted-foreground">{sale.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>{t('quickActions')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button
                  key={index}
                  className={`w-full justify-start gap-3 h-12 text-white ${action.color}`}
                  onClick={() => console.log(`Action: ${action.label}`)}
                >
                  <Icon className="h-5 w-5" />
                  {action.label}
                </Button>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
