import { HomeIcon, Library, Search } from 'lucide-react';
import { NavItem } from './NavItem';
import { PlaylistItem } from './PlaylistItem';

export function Sidebar() {
  return (
    <aside className='w-72 bg-zinc-950 p-6'>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full' />
        <div className='w-3 h-3 bg-yellow-500 rounded-full' />
        <div className='w-3 h-3 bg-green-500 rounded-full' />
      </div>

      <nav className='space-y-5 mt-5'>
        <NavItem title='Home' icon={<HomeIcon />} />
        <NavItem title='Search' icon={<Search />} />
        <NavItem title='Your Library' icon={<Library />} />
      </nav>

      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
        <PlaylistItem title='Radar de Novidades' />
        <PlaylistItem title='Workout' />
        <PlaylistItem title='Confidence Boost' />
        <PlaylistItem title='Lo-Fi Beats' />
        <PlaylistItem title='Louvorzin' />
        <PlaylistItem title="90's Workout" />
        <PlaylistItem title='Pumped Pop' />
        <PlaylistItem title='Hit para relaxar' />
      </nav>
    </aside>
  );
}
