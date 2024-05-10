import configPromise from '@payload-config';
import Image from 'next/image';
import { getPayload } from 'payload';

const HomeMarketingPage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'pages',
  });

  return (
    <>
      <main className='flex-1'>
        <section className='w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32'>
          <div className='container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700'>
                  Some text
                </div>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700'>
                  UAntwerpen
                </div>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  We are improving something important
                </h1>
                <p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Discover the powerful partnership between something and something else really
                  important, inspiring youth through technology, innovation, and community.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <a
                  className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='grid grid-cols-2 gap-4'>
                <Image
                  alt='Some alt text'
                  className='aspect-square object-contain'
                  height='150'
                  src='/placeholder.svg'
                  width='150'
                />
                <Image
                  alt='Some alt text'
                  className='aspect-square object-contain'
                  height='150'
                  src='/placeholder.svg'
                  width='150'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  One thing I don&apos;t know why.
                </h2>
                <p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  It doesn&apos;t even matter how hard you try. Keep that in mind, I designed this
                  rhyme. To explain in due time. All I know. Time is a valuable thing.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <Image
                alt='Some alt text'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                height='310'
                src='/placeholder.svg'
                width='550'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Watch it fly by as the pendulum swings</h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Watch it count down to the end of the day. The clock ticks life away.
                        It&apos;s so unreal. Didn&apos;t look out below. Watch the time go right out
                        the window.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>
                        Tryin&apos; to hold on, did-didn&apos;t even know
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        I wasted it all just to watch you go. I kept everything inside and even
                        though I tried. It all fell apart. What it meant to me will eventually.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>
                        Be a memory of a time when I tried so hard{' '}
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        I tried so hard and got so far. But in the end it doesn&apos;t even matter.
                        I had to fall to lose it all. But in the end it doesn&apos;t even matter
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeMarketingPage;
