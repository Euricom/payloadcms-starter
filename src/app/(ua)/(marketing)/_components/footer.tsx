import { Facebook, Instagram, Linkedin, Mountain, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 py-12 text-gray-400 md:py-16'>
      <div className='container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <Mountain className='h-6 w-6 text-gray-400' />
            <span className='text-lg font-semibold text-gray-300'>
              {' '}
              Why does it feel like night today?
            </span>
          </div>
          <p className='text-sm'>
            Somethin&apos; in here&apos;s not right today Why am I so uptight today? Paranoia&apos;s
            all I got left I don&apos;t know what stressed me first Or how the pressure was fed
          </p>
        </div>
        <div className='flex flex-col gap-2'></div>
        <div className='flex flex-col gap-2'>
          <h4 className='font-semibold text-gray-300'>But I know just what it feels like</h4>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            To have
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            a voice
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            in the back
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            of my head
          </Link>
        </div>

        <div className='flex flex-col gap-2'>
          <h4 className='font-semibold text-gray-300'>Legal</h4>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            Terms of Service
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            Privacy Policy
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            Cookie Policy
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            Accessibility
          </Link>
        </div>
      </div>
      <div className='container mx-auto mt-8 flex flex-col items-center justify-between px-4 md:mt-12 md:flex-row md:px-6'>
        <p className='text-sm'>© 2024 Some incredible app. All rights reserved.</p>
        <div className='mt-4 flex items-center gap-4 md:mt-0'>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            <Twitter className='h-5 w-5' />
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            <Facebook className='h-5 w-5' />
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            <Linkedin className='h-5 w-5' />
          </Link>
          <Link className='transition-colors hover:text-gray-300' href='#'>
            <Instagram className='h-5 w-5' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
