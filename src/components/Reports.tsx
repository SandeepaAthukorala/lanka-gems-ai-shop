
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FileText,
  Clock,
  Gem,
  User,
  Diamond,
  Timer
} from 'lucide-react';

export const Reports: React.FC = () => {
  const { t } = useLanguage();

  const reports = [
    {
      title: 'Daily Sales Report',
      description: 'Complete breakdown of today\'s transactions',
      value: 'Rs 3,45,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: Clock,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Inventory Summary',
      description: 'Current stock levels and valuation',
      value: '1,247 Items',
      change: '+5.2%',
      changeType: 'positive',
      icon: Gem,
      color: 'text-gold-600',
      bgColor: 'bg-gold-50'
    },
    {
      title: 'Customer Analytics',
      description: 'Customer behavior and purchase patterns',
      value: '89 Active',
      change: '+8.1%',
      changeType: 'positive',
      icon: User,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Profit Margins',
      description: 'Profitability analysis by product category',
      value: '24.5%',
      change: '+1.8%',
      changeType: 'positive',
      icon: Diamond,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const aiInsights = [
    {
      type: 'trend',
      title: 'Sales Trend Analysis',
      insight: 'Gold jewelry sales increased by 15% this week. Consider expanding gold inventory.',
      importance: 'high'
    },
    {
      type: 'stock',
      title: 'Low Stock Alert',
      insight: '12 items are running low. Reorder diamond earrings and silver bracelets soon.',
      importance: 'medium'
    },
    {
      type: 'customer',
      title: 'Customer Behavior',
      insight: 'Premium customers prefer weekend shopping. Consider special weekend promotions.',
      importance: 'medium'
    },
    {
      type: 'pricing',
      title: 'Pricing Optimization',
      insight: 'Silver items have highest turnover rate. Consider slight price increase for better margins.',
      importance: 'low'
    }
  ];

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('reports')}</h1>
          <p className="text-muted-foreground">Analytics and business insights</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => {
          const Icon = report.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${report.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${report.color}`} />
                  </div>
                  <div className={`text-sm font-medium ${
                    report.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {report.change}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                  <p className="text-2xl font-bold text-foreground">{report.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Diamond className="h-5 w-5 text-primary" />
              AI-Powered Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${getImportanceColor(insight.importance)} animate-fade-in`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{insight.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    insight.importance === 'high' ? 'bg-red-100 text-red-700' :
                    insight.importance === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {insight.importance}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{insight.insight}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Quick Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'Weekly Sales Summary', description: 'Detailed breakdown of this week\'s performance' },
              { name: 'Inventory Valuation', description: 'Current stock value by category' },
              { name: 'Customer Purchase History', description: 'Top customers and buying patterns' },
              { name: 'Profit & Loss Statement', description: 'Monthly financial overview' },
              { name: 'Tax Report', description: 'VAT and tax calculations for compliance' }
            ].map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer animate-fade-in"
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <div>
                  <h4 className="font-medium text-foreground">{report.name}</h4>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Timer className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Charts Coming Soon</h3>
              <p className="text-muted-foreground">Interactive sales and inventory charts will be available here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
