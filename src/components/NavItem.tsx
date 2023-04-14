interface NavItemProps {
  title: string;
  icon: React.ReactNode;
}

export function NavItem({ title, icon }: NavItemProps) {
  return (
    <a href='' className='flex items-center gap-4 text-zinc-300 font-semibold hover:text-zinc-50'>
      {icon}
      {title}
    </a>
  );
}
