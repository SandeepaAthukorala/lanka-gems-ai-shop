
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Plus,
  Clock,
  Search,
  User,
  Calendar
} from 'lucide-react';

export const Sales: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const sales = [
    {
      id: 'INV-001',
      customer: 'Sunil Perera',
      items: [
        { name: '22K Gold Ring', price: 85000, quantity: 1 }
      ],
      total: 85000,
      date: '2024-06-10',
      time: '10:30 AM',
      status: 'completed',
      paymentMethod: 'cash'
    },
    {
      id: 'INV-002',
      customer: 'Kamala Silva',
      items: [
        { name: 'Diamond Necklace', price: 225000, quantity: 1 }
      ],
      total: 225000,
      date: '2024-06-10',
      time: '11:45 AM',
      status: 'completed',
      paymentMethod: 'card'
    },
    {
      id: 'INV-003',
      customer: 'Ravi Fernando',
      items: [
        { name: 'Silver Bracelet', price: 15000, quantity: 2 }
      ],
      total: 30000,
      date: '2024-06-10',
      time: '02:15 PM',
      status: 'pending',
      paymentMethod: 'cash'
    }
  ];

  const filteredSales = sales.filter(sale =>
    sale.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const todayTotal = sales
    .filter(sale => sale.date === '2024-06-10' && sale.status === 'completed')
    .reduce((sum, sale) => sum + sale.total, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('sales')}</h1>
          <p className="text-muted-foreground">Track and manage your sales</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          {t('newSale')}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Sales</p>
                <p className="text-2xl font-bold text-foreground">Rs {todayTotal.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Transactions</p>
                <p className="text-2xl font-bold text-foreground">{sales.length}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Sale</p>
                <p className="text-2xl font-bold text-foreground">
                  Rs {Math.round(todayTotal / sales.filter(s => s.status === 'completed').length).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gold-50 flex items-center justify-center">
                <User className="h-6 w-6 text-gold-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search sales by customer or invoice ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Sales List */}
      <div className="space-y-4">
        {filteredSales.map((sale, index) => (
          <Card key={sale.id} className="hover:shadow-lg transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{sale.customer}</h3>
                      <p className="text-sm text-muted-foreground">Invoice: {sale.id}</p>
                    </div>
                    <Badge className={getStatusColor(sale.status)}>
                      {sale.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Items</p>
                      {sale.items.map((item, idx) => (
                        <p key={idx} className="text-sm font-medium">
                          {item.name} × {item.quantity}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
                      <p className="text-sm font-medium">{sale.date} at {sale.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:items-end gap-3">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Amount</p>
                    <p className="text-2xl font-bold text-foreground">
                      Rs {sale.total.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">
                      Print Receipt
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSales.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No sales found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
