import Image from 'next/image';
import { Play } from 'lucide-react';

interface MostPlayedCardProps {
  title: string;
}

export function MostPlayedCard({ title }: MostPlayedCardProps) {
  return (
    <a href='' className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
      <Image src='/album.jpg' alt='Capa do álbum Wasting Light da banda Foo Fighters' width={100} height={100} />
      <strong>{title}</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='#000' />
      </button>
    </a>
  );
}
