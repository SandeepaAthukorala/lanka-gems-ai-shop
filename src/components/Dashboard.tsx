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
  Timer,
  TrendingUp,
  Star
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      title: t('todaysSales'),
      value: 'Rs 2,45,000',
      icon: Clock,
      color: 'text-gold-400',
      bgColor: 'bg-gold-400/10',
      trend: '+12.5%',
      trendUp: true,
    },
    {
      title: t('totalInventory'),
      value: '1,247',
      icon: Gem,
      color: 'text-silver-400',
      bgColor: 'bg-silver-400/10',
      trend: '+5.2%',
      trendUp: true,
    },
    {
      title: t('activeCustomers'),
      value: '89',
      icon: User,
      color: 'text-gold-500',
      bgColor: 'bg-gold-500/10',
      trend: '+8.1%',
      trendUp: true,
    },
    {
      title: t('lowStock'),
      value: '12',
      icon: Timer,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      trend: '-2.3%',
      trendUp: false,
    },
  ];

  const recentSales = [
    { 
      id: 1, 
      customer: 'Sunil Perera', 
      item: '22K Gold Ring', 
      amount: 'Rs 85,000', 
      time: '2 hours ago',
      type: 'gold'
    },
    { 
      id: 2, 
      customer: 'Kamala Silva', 
      item: 'Diamond Necklace', 
      amount: 'Rs 2,25,000', 
      time: '3 hours ago',
      type: 'diamond'
    },
    { 
      id: 3, 
      customer: 'Ravi Fernando', 
      item: 'Silver Bracelet', 
      amount: 'Rs 15,000', 
      time: '5 hours ago',
      type: 'silver'
    },
  ];

  const quickActions = [
    { 
      label: t('addNewItem'), 
      icon: Plus, 
      gradient: 'from-gold-500 to-gold-600',
      shadow: 'shadow-gold-glow'
    },
    { 
      label: t('newSale'), 
      icon: Clock, 
      gradient: 'from-silver-400 to-silver-500',
      shadow: 'shadow-silver-glow'
    },
    { 
      label: t('viewReports'), 
      icon: FileText, 
      gradient: 'from-gold-400 to-gold-500',
      shadow: 'shadow-gold-glow'
    },
  ];

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'gold':
        return <Star className="h-4 w-4 text-gold-400" />;
      case 'diamond':
        return <Diamond className="h-4 w-4 text-silver-300" />;
      case 'silver':
        return <Gem className="h-4 w-4 text-silver-400" />;
      default:
        return <Gem className="h-4 w-4 text-gold-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="luxury-card rounded-xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-silver-400/5"></div>
        <div className="relative flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              {t('welcomeBack')}
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center luxury-glow">
              <Diamond className="h-10 w-10 text-luxury-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="luxury-card transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center luxury-glow`}>
                    <Icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trendUp ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`h-4 w-4 ${!stat.trendUp ? 'rotate-180' : ''}`} />
                    {stat.trend}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Sales */}
        <Card className="lg:col-span-2 luxury-card">
          <CardHeader className="border-b border-border/50">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="w-8 h-8 rounded-lg bg-gold-400/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-gold-400" />
              </div>
              {t('recentSales')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentSales.map((sale, index) => (
                <div key={sale.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all duration-300 group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getItemIcon(sale.type)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{sale.customer}</p>
                      <p className="text-sm text-muted-foreground">{sale.item}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                      {sale.amount}
                    </p>
                    <p className="text-sm text-muted-foreground">{sale.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="luxury-card">
          <CardHeader className="border-b border-border/50">
            <CardTitle className="text-xl">{t('quickActions')}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button
                  key={index}
                  className={`w-full justify-start gap-3 h-14 text-left bg-gradient-to-r ${action.gradient} hover:scale-105 transition-all duration-300 text-luxury-black font-semibold ${action.shadow} relative overflow-hidden group`}
                  onClick={() => console.log(`Action: ${action.label}`)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Icon className="h-6 w-6 relative z-10" />
                  <span className="relative z-10">{action.label}</span>
                </Button>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};