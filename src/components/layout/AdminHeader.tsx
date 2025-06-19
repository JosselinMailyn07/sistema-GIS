// components/layout/AdminHeader.tsx
import { Menu, User, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminHeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

export const AdminHeader = ({ onToggleSidebar, sidebarOpen }: AdminHeaderProps) => {
  return (
    <header className="bg-primary text-primary-foreground h-16 flex items-center justify-between px-4 w-full shadow-lg">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
          className="text-primary-foreground hover:bg-primary-foreground/10 p-2"
        >
          <Menu size={20} />
        </Button>
        <h1 className="text-xl font-semibold">Sistema de Administración</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">ADMINISTRACIÓN GAETANA-GIS</span>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-2">
            <Bell size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-2">
            <Settings size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-2">
            <User size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};