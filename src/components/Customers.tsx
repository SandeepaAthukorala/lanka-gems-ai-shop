
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Plus,
  Search,
  User,
  Clock,
  Diamond
} from 'lucide-react';

export const Customers: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'Sunil Perera',
      email: 'sunil.perera@email.com',
      phone: '+94 77 123 4567',
      totalPurchases: 485000,
      lastPurchase: '2024-06-10',
      purchaseCount: 8,
      tier: 'gold',
      address: 'Colombo 03'
    },
    {
      id: 2,
      name: 'Kamala Silva',
      email: 'kamala.silva@email.com',
      phone: '+94 71 987 6543',
      totalPurchases: 725000,
      lastPurchase: '2024-06-09',
      purchaseCount: 12,
      tier: 'platinum',
      address: 'Kandy'
    },
    {
      id: 3,
      name: 'Ravi Fernando',
      email: 'ravi.fernando@email.com',
      phone: '+94 76 555 0123',
      totalPurchases: 125000,
      lastPurchase: '2024-06-08',
      purchaseCount: 3,
      tier: 'silver',
      address: 'Galle'
    },
    {
      id: 4,
      name: 'Priya Jayawardena',
      email: 'priya.j@email.com',
      phone: '+94 75 444 9876',
      totalPurchases: 950000,
      lastPurchase: '2024-06-07',
      purchaseCount: 15,
      tier: 'platinum',
      address: 'Negombo'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'bg-purple-100 text-purple-800';
      case 'gold':
        return 'bg-gold-100 text-gold-800';
      case 'silver':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return <Diamond className="h-3 w-3" />;
      case 'gold':
        return <Diamond className="h-3 w-3" />;
      case 'silver':
        return <Diamond className="h-3 w-3" />;
      default:
        return <User className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('customers')}</h1>
          <p className="text-muted-foreground">Manage your customer relationships</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold text-foreground">{customers.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Platinum Tier</p>
                <p className="text-2xl font-bold text-foreground">
                  {customers.filter(c => c.tier === 'platinum').length}
                </p>
              </div>
              <Diamond className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Purchase</p>
                <p className="text-2xl font-bold text-foreground">
                  Rs {Math.round(customers.reduce((sum, c) => sum + c.totalPurchases, 0) / customers.length).toLocaleString()}
                </p>
              </div>
              <Clock className="h-8 w-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active This Month</p>
                <p className="text-2xl font-bold text-foreground">
                  {customers.filter(c => new Date(c.lastPurchase) > new Date('2024-06-01')).length}
                </p>
              </div>
              <User className="h-8 w-8 text-gold-600" />
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
              placeholder="Search customers by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customer List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCustomers.map((customer, index) => (
          <Card key={customer.id} className="hover:shadow-lg transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{customer.name}</h3>
                    <p className="text-sm text-muted-foreground">{customer.address}</p>
                  </div>
                </div>
                <Badge className={`${getTierColor(customer.tier)} flex items-center gap-1`}>
                  {getTierIcon(customer.tier)}
                  {customer.tier}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium truncate">{customer.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-medium">{customer.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total Purchases</p>
                    <p className="font-bold text-lg text-foreground">
                      Rs {customer.totalPurchases.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Orders</p>
                    <p className="font-medium">{customer.purchaseCount} orders</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">Last Purchase</p>
                  <p className="font-medium">{new Date(customer.lastPurchase).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  View History
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No customers found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
