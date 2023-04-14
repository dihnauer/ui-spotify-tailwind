import Image from 'next/image';
import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Image src='/album.jpg' alt='Capa do álbum Wasting Light da banda Foo Fighters' width={56} height={56} />
        <div className='flex flex-col'>
          <strong className='font-normal'>Rope</strong>
          <span className='text-xs text-zinc-400 block'>Foo Fighters</span>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <Shuffle size={20} className='text-zinc-400 hover:text-zinc-50' />
          <SkipBack size={20} className='text-zinc-400 hover:text-zinc-50' />

          <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play fill='#000' size={18} />
          </button>

          <SkipForward size={20} className='text-zinc-400 hover:text-zinc-50' />
          <Repeat size={20} className='text-zinc-400 hover:text-zinc-50' />
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='h-1 w-20 bg-zinc-200 rounded-full'></div>
          </div>
          <span className='text-xs text-zinc-400'>2:48</span>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className='flex items-center gap-2'>
          <Volume2 />
          <div className='h-1 rounded-full w-20 bg-zinc-200'></div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
