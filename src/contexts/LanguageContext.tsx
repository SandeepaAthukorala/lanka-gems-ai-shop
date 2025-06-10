
import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'si' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    inventory: 'Inventory',
    sales: 'Sales',
    customers: 'Customers',
    reports: 'Reports',
    settings: 'Settings',
    
    // Dashboard
    welcomeBack: 'Welcome back',
    todaysSales: "Today's Sales",
    totalInventory: 'Total Inventory',
    activeCustomers: 'Active Customers',
    lowStock: 'Low Stock Items',
    recentSales: 'Recent Sales',
    quickActions: 'Quick Actions',
    addNewItem: 'Add New Item',
    newSale: 'New Sale',
    viewReports: 'View Reports',
    
    // Common
    search: 'Search',
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    total: 'Total',
    price: 'Price',
    quantity: 'Quantity',
    weight: 'Weight',
    karat: 'Karat',
    
    // Items
    gold: 'Gold',
    silver: 'Silver',
    gems: 'Gems',
    rings: 'Rings',
    necklaces: 'Necklaces',
    earrings: 'Earrings',
    bracelets: 'Bracelets',
  },
  si: {
    // Navigation
    dashboard: 'ප්‍රධාන පුවරුව',
    inventory: 'තොග ගබඩාව',
    sales: 'විකුණුම්',
    customers: 'පාරිභෝගිකයන්',
    reports: 'වාර්තා',
    settings: 'සැකසුම්',
    
    // Dashboard
    welcomeBack: 'නැවත සාදරයෙන් පිළිගනිමු',
    todaysSales: 'අදේ විකුණුම්',
    totalInventory: 'මුළු තොග ගබඩාව',
    activeCustomers: 'ක්‍රියාකාරී පාරිභෝගිකයන්',
    lowStock: 'අඩු තොග',
    recentSales: 'මෑත විකුණුම්',
    quickActions: 'ඉක්මන් ක්‍රියා',
    addNewItem: 'නව භාණ්ඩයක් එකතු කරන්න',
    newSale: 'නව විකුණුමක්',
    viewReports: 'වාර්තා බලන්න',
    
    // Common
    search: 'සොයන්න',
    add: 'එකතු කරන්න',
    edit: 'සංස්කරණය',
    delete: 'මකන්න',
    save: 'සුරකින්න',
    cancel: 'අවලංගු කරන්න',
    total: 'මුළු එකතුව',
    price: 'මිල',
    quantity: 'ප්‍රමාණය',
    weight: 'බර',
    karat: 'කැරට්',
    
    // Items
    gold: 'රන්',
    silver: 'රිදී',
    gems: 'මැණික්',
    rings: 'මුදු',
    necklaces: 'මාල',
    earrings: 'කරාබු',
    bracelets: 'කටකඩ',
  },
  ta: {
    // Navigation
    dashboard: 'முகப்பு',
    inventory: 'சரக்கு',
    sales: 'விற்பனை',
    customers: 'வாடிக்கையாளர்கள்',
    reports: 'அறிக்கைகள்',
    settings: 'அமைப்புகள்',
    
    // Dashboard
    welcomeBack: 'மீண்டும் வரவேற்கிறோம்',
    todaysSales: 'இன்றைய விற்பனை',
    totalInventory: 'மொத்த சரக்கு',
    activeCustomers: 'செயலில் உள்ள வாடிக்கையாளர்கள்',
    lowStock: 'குறைந்த சரக்கு',
    recentSales: 'சமீபத்திய விற்பனை',
    quickActions: 'விரைவு செயல்கள்',
    addNewItem: 'புதிய பொருள் சேர்க்க',
    newSale: 'புதிய விற்பனை',
    viewReports: 'அறிக்கைகளைப் பார்க்க',
    
    // Common
    search: 'தேடல்',
    add: 'சேர்க்க',
    edit: 'திருத்த',
    delete: 'அழிக்க',
    save: 'சேமிக்க',
    cancel: 'ரத்து செய்',
    total: 'மொத்தம்',
    price: 'விலை',
    quantity: 'அளவு',
    weight: 'எடை',
    karat: 'கேரட்',
    
    // Items
    gold: 'தங்கம்',
    silver: 'வெள்ளி',
    gems: 'ரத்தினங்கள்',
    rings: 'மோதிரங்கள்',
    necklaces: 'மாலைகள்',
    earrings: 'காதணிகள்',
    bracelets: 'வளையல்கள்',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
