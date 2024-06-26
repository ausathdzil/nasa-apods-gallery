import Link from 'next/link';
import Image from 'next/image';
import { Apod } from '@/lib/types';

export function ApodItem({ apod }: { apod: Apod }) {
  if (apod.media_type === 'video') {
    apod.url = apod.thumbnail_url;
  }

  return (
    <li
      key={apod.date}
      className="group flex flex-col text-center gap-4 w-[300px]"
    >
      <Link href={`/gallery/${encodeURIComponent(apod.date)}`}>
        <Image
          className="rounded-xl transition ease-in-out group-hover:scale-105 w-[300px] h-[300px] object-cover shadow-xl"
          src={apod.url ? apod.url : apod.thumbnail_url}
          alt={apod.title}
          width={300}
          height={300}
          priority={true}
        />
      </Link>
      <div className="flex flex-col gap-2">
        <p>{apod.date}</p>
        <p className="transition ease-in-out delay-50 group-hover:text-blue-400 font-bold">
          {apod.title}
        </p>
      </div>
    </li>
  );
}
