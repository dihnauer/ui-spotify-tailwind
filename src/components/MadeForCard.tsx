import Image from 'next/image';
import { Play } from 'lucide-react';

interface MadeForCardProps {
  title: string;
  artists: string;
}

export function MadeForCard({ title, artists }: MadeForCardProps) {
  return (
    <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-3 hover:bg-white/10 relative group'>
      <Image src='/album.jpg' alt='Capa do álbum Wasting Light da banda Foo Fighters' className='w-full rounded-md' width={150} height={150} />
      <strong className='font-semibold'>{title}</strong>
      <span className='text-sm text-zinc-500 block'>{artists}</span>
      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black absolute bottom-24 right-6 invisible group-hover:visible'>
        <Play fill='#000' />
      </button>
    </a>
  );
}
