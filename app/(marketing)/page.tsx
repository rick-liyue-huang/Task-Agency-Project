import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LayoutList } from 'lucide-react';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';

const headingFont = localFont({
  src: '../../public/fonts/SpaceGrotesk-VariableFont_wght.ttf',
});

const textFont = Poppins({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-sky-100 text-sky-700 rounded-full uppercase">
          <LayoutList className="h-6 w-6 mr-2" />
          Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-blue-600 mb-6">
          Welcome to Task Agency
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-green-600 to-pink-600 text-white px-4 p-2 rounded-md  pb-4 w-fit">
          work together, work efficiently
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
          textFont.className
        )}
      >
        We are a task management platform that helps you and your team to work,
        collaborate and manage your tasks efficiently.
      </div>
      <Button className="mt-6" size={'lg'}>
        <Link href={'/sign-up'}>Get the Agency for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
