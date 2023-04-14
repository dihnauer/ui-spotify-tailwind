import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { MostPlayedCard } from '@/components/MostPlayedCard';
import { MadeForCard } from '@/components/MadeForCard';

import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />

        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='p-2 rounded-full bg-black/40'>
              <ChevronLeft />
            </button>

            <button className='p-2 rounded-full bg-black/40'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-bold text-3xl mt-6'>Good afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-6'>
            <MostPlayedCard title='Wasting Light' />
            <MostPlayedCard title='Wasting Light' />
            <MostPlayedCard title='Wasting Light' />
            <MostPlayedCard title='Wasting Light' />
            <MostPlayedCard title='Wasting Light' />
            <MostPlayedCard title='Wasting Light' />
          </div>

          <h2 className='font-semibold text-2xl mt-6'>Made For Diogo Hanauer</h2>

          <div className='grid grid-cols-6 gap-6 mt-6'>
            <MadeForCard title='Daily Mix' artists='Post Malone, Khalid, Kygo and more' />
            <MadeForCard title='Daily Mix' artists='Post Malone, Khalid, Kygo and more' />
            <MadeForCard title='Daily Mix' artists='Post Malone, Khalid, Kygo and more' />
            <MadeForCard title='Daily Mix' artists='Post Malone, Khalid, Kygo and more' />
            <MadeForCard title='Daily Mix' artists='Post Malone, Khalid, Kygo and more' />
            <MadeForCard title='Daily Mix' artists='Post Malone, Khalid, Kygo and more' />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
