
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Search,
  Plus,
  Gem,
  Diamond,
  Tag
} from 'lucide-react';

export const Inventory: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const inventory = [
    {
      id: 1,
      name: 'Diamond Engagement Ring',
      type: 'ring',
      material: 'gold',
      karat: 18,
      weight: 5.2,
      price: 185000,
      stock: 3,
      category: 'premium'
    },
    {
      id: 2,
      name: 'Gold Chain Necklace',
      type: 'necklace',
      material: 'gold',
      karat: 22,
      weight: 15.8,
      price: 95000,
      stock: 7,
      category: 'regular'
    },
    {
      id: 3,
      name: 'Silver Bangles Set',
      type: 'bracelet',
      material: 'silver',
      karat: 0,
      weight: 45.0,
      price: 12000,
      stock: 15,
      category: 'regular'
    },
    {
      id: 4,
      name: 'Emerald Earrings',
      type: 'earrings',
      material: 'gold',
      karat: 18,
      weight: 8.5,
      price: 125000,
      stock: 2,
      category: 'premium'
    }
  ];

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockStatus = (stock: number) => {
    if (stock <= 2) return { label: 'Low Stock', color: 'bg-red-100 text-red-800' };
    if (stock <= 5) return { label: 'Medium', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'In Stock', color: 'bg-green-100 text-green-800' };
  };

  const getMaterialIcon = (material: string) => {
    switch (material.toLowerCase()) {
      case 'gold':
        return <Diamond className="h-4 w-4 text-gold-600" />;
      case 'silver':
        return <Gem className="h-4 w-4 text-gray-600" />;
      default:
        return <Tag className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('inventory')}</h1>
          <p className="text-muted-foreground">Manage your jewelry collection</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          {t('addNewItem')}
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('search') + ' jewelry items...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.map((item, index) => {
          const stockStatus = getStockStatus(item.stock);
          
          return (
            <Card key={item.id} className="hover:shadow-lg transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {getMaterialIcon(item.material)}
                    {item.name}
                  </CardTitle>
                  <Badge className={stockStatus.color}>
                    {stockStatus.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Material</p>
                    <p className="font-medium capitalize">{item.material}</p>
                  </div>
                  {item.karat > 0 && (
                    <div>
                      <p className="text-muted-foreground">{t('karat')}</p>
                      <p className="font-medium">{item.karat}K</p>
                    </div>
                  )}
                  <div>
                    <p className="text-muted-foreground">{t('weight')}</p>
                    <p className="font-medium">{item.weight}g</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Stock</p>
                    <p className="font-medium">{item.stock} pcs</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{t('price')}</p>
                      <p className="text-xl font-bold text-foreground">
                        Rs {item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        {t('edit')}
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Sell
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredInventory.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Gem className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
