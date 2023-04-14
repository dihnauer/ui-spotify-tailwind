interface PlaylistItemProps {
  title: string;
}

export function PlaylistItem({ title }: PlaylistItemProps) {
  return (
    <a href='' className='text-zinc-400 hover:text-zinc-100'>
      {title}
    </a>
  );
}
