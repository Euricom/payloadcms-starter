import { ModeToggle } from '@/components/ModeToggle';
import { useAuth } from '@/components/providers/Auth.provider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  FileSliders,
  LineChart,
  LogOut,
  Package,
  Package2,
  SquareArrowOutUpRight,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AppNavbar = () => {
  const { user, logout } = useAuth();

  const logUserOut = async () => {
    await logout();
  };

  const currentPath = usePathname();
  const links = [
    {
      href: '/app',
      label: 'Dashboard',
      icon: <LineChart />,
    },
    {
      href: '/app/test',
      label: 'Test page',
      icon: <Package />,
    },
    {
      href: '/admin',
      label: `Admin`,
      icon: <FileSliders />,
      external: true,
    },
  ];

  const isCurrentPath = (path: string) => currentPath === path;

  return (
    <div className='group flex flex-col gap-4 bg-gray-100 p-4 transition-all duration-300 dark:bg-gray-800 md:w-64 md:border-r md:p-6'>
      <div className='flex items-center justify-between'>
        <Link className='flex items-center gap-2 font-semibold' href='#'>
          <Package2 className='h-6 w-6' />
          <span className=''>Acme Inc</span>
        </Link>
      </div>
      <nav className='flex-1 space-y-2 overflow-auto'>
        {links.map(({ href, label, icon, external }) => (
          <Link
            key={href}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isCurrentPath(href)
                ? 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-600'
                : 'text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50'
            }`}
            href={href}
          >
            {icon}
            {label}
            {external && <SquareArrowOutUpRight className='h-3 w-3' />}
          </Link>
        ))}
      </nav>
      <Separator className='dark:bg-gray-600' />
      <div className='my-4 flex gap-2'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50'>
          {user?.title?.charAt(0).toUpperCase()}
          {user?.title?.split(' ')?.at(1)?.charAt(0).toUpperCase()}
        </div>
        <div>
          <p>{user?.title}</p>
          <p className='text-sm text-slate-400'>{user?.email}</p>
        </div>
      </div>
      <div className='mt-auto flex justify-center gap-4 pb-6'>
        <ModeToggle buttonVariant='outline' buttonSize='default' />
        <Button variant={'outline'} size={'default'}>
          <User className='h-[1.2rem] w-[1.2rem]' />
        </Button>
        <Button variant={'outline'} size={'default'} onClick={logUserOut}>
          <LogOut className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      </div>
    </div>
  );
};

export default AppNavbar;
