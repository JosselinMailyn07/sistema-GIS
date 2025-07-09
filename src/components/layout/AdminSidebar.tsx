
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  Settings,
  FileText,
  BarChart3,
  ChevronDown,
  ChevronRight,
  UserCheck,
  BookOpen,
  Calendar,
  User,
  ClipboardList,
  MessageSquare,
  Download,
  DollarSign,
  InboxIcon,
  Banknote,
  Check,
  ReceiptText,
  Landmark,
  ArrowLeftRight,
  Handshake,
  Divide,
  PackageOpen,
  Package,
  HandCoins,
  FilePenLine,
  ArchiveRestore,
  ListChecks,
  Box,
  ShoppingBag
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdminSidebarProps {
  isOpen: boolean;
}

interface MenuItem {
  id: string;
  title: string;
  icon: React.ElementType;
  path?: string;
  children?: MenuItem[];
}


// Configuración de menús para cada rol
const adminMenuItems: MenuItem[] = [
  // Ventas
  {
    id: 'pruebas',
    title: 'PRUEBAS',
    icon: BarChart3,
    children: [
      {
        id: 'Factura',
        title: 'PRUEBAAA',
        icon: FileText,
        path: '/admin/reports'
      },
      {
        id: 'factura',
        title: 'factura',
        icon: ClipboardList,
        path: '/admin/factura'
      },
      
    ]
  },



 // Ventas

  {
    id: 'ventas',
    title: 'Ventas',
    icon: BarChart3,
    path: '/admin/ventas'
  },






  
  // Compras

  {
    id: 'compras',
    title: 'Compras',
    icon: ShoppingBag,
    path: '/admin/compras'
  },
      























  // Inventario
    {
      id: 'Inventario',
      title: 'Inventario',
      icon: Box,
      path: '/admin/inventario'
    },









  // Tesoreria
  {
    id: 'Tesoreria',
    title: 'Tesorería',
    icon: DollarSign,
    path: '/admin/tesoreria',
  }








// RUTAS HANSEL CONFIGURACION DE MENUS PARA ADMINISTRADOR














































];

// Student menu items declaration moved outside of adminMenuItems array
const studentMenuItems: MenuItem[] = [
  {
    id: 'PRUEBA',
    title: 'PRUEBA',
    icon: BookOpen,
    children: [
      {
        id: 'prueba-022',
        title: 'Pruebas-02',
        icon: ClipboardList,
        path: '/edit/prueba-02'
      },

    ]
  },
  {
    id: 'Pruebaaa',
    title: 'Prueba',
    icon: UserCheck,
    children: [
      {
        id: 'prueba003',
        title: 'Prueba003',
        icon: MessageSquare,
        path: '/edit/prueba003'
      },

    ]
  },
];

export const AdminSidebar = ({ isOpen }: AdminSidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['administration']);
  const [currentRole, setCurrentRole] = useState<'admin' | 'student'>('admin');
  const location = useLocation();

  // Determinar la sección activa basada en la ruta
  const activeSection = location.pathname.startsWith('/admin/ventas') ? 'ventas' :

                       location.pathname.startsWith('/admin/gastos') ? 'gastos' :
                       location.pathname.startsWith('/admin/clientes') ? 'clientes'  : null;

  /**
   * Función para expandir/contraer elementos del menú
   * @param itemId - ID del elemento a expandir/contraer
   */
  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  /**
   * Función para cambiar el rol del usuario
   * @param role - Nuevo rol seleccionado
   */
  const handleRoleChange = (role: 'admin' | 'student') => {
    setCurrentRole(role);
    // Expandir automáticamente el primer elemento del menú según el rol
    setExpandedItems(role === 'admin' ? ['administration'] : ['academic-student']);
  };

  // Seleccionar los elementos del menú según el rol actual
  const menuItems = currentRole === 'admin' ? adminMenuItems : studentMenuItems;

  /**
   * Función recursiva para renderizar elementos del menú
   * @param item - Elemento del menú a renderizar
   * @param level - Nivel de anidación (para indentación)
   */
  const renderMenuItem = (item: MenuItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const isActive = item.path && (location.pathname === item.path || location.pathname.startsWith(item.path + '/'));
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        {hasChildren ? (
          // Elemento con hijos (expandible)
          <button
            onClick={() => toggleExpanded(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors rounded-lg mx-2
              ${level > 0 ? 'pl-8' : ''}
              ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
              <span className="text-sm font-medium">{item.title}</span>
            </div>
            {isExpanded ? (
              <ChevronDown size={16} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
            ) : (
              <ChevronRight size={16} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
            )}
          </button>
        ) : (
          <Link
            to={item.path || '#'}
            className={`flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors rounded-lg mx-2
              ${level > 0 ? 'pl-8' : ''}
              ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`}
          >
            <item.icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
            <span className="text-sm font-medium">
              {item.title}
            </span>
          </Link>
        )}

        {hasChildren && isExpanded && (
          <div className="ml-4">
            {item.children?.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <aside className="w-64 bg-gray-50 h-screen border-r border-gray-200">
      {/* Header del sidebar con logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center">
            <span className="font-bold text-sm">GIS</span>
          </div>
          <div>
            <p className="text-xs text-gray-600">EMPRESA GIS</p>
            <p className="text-xs text-gray-600">Portoviejo</p>
          </div>
        </div>

        {/* Selector de rol con dropdown */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-600">Seleccionar:</label>
          <Select value={currentRole} onValueChange={handleRoleChange}>
            <SelectTrigger className="w-full h-9 bg-white border-utm-border hover:border-utm-green focus:border-utm-green">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-utm-border shadow-lg z-50">
              <SelectItem
                value="admin"
                className="hover:bg-sidebar-accent focus:bg-sidebar-primary cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Settings size={16} className="text-utm-green" />
                  <span className="font-medium">Administración</span>
                </div>
              </SelectItem>
              <SelectItem
                value="student"
                className="hover:bg-sidebar-primary focus:bg-sidebar-accent cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <User size={16} className="text-utm-blue" />
                  <span className="font-medium">PRUEBA</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="py-2">
        <p className="hover:bg-sidebar-primary px-4 py-2 text-xs font-semibold text-utm-secondary uppercase tracking-wide">
          MENÚ - {currentRole === 'admin' ? 'ADMINISTRACION' : 'ESTUDIANTE'}
        </p>
        {menuItems.map(item => renderMenuItem(item))}
      </nav>
    </aside>
  );
};