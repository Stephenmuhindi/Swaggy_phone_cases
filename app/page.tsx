import { Icons } from '@/components/Icons'
import MaxWidthWrapper from '@/components/Maxwidthwrapper'
import Maxwidthwrapper from '@/components/Maxwidthwrapper'
import Phone from '@/components/Phone'
import { Reviews } from '@/components/Reviews'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-slate-50 grainy-light'>
      <section>
        <Maxwidthwrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
                <img src='/swaggy pic 2.png' className='w-full' />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Your Image on a{' '}
                <span className='bg-purple-600 px-2 text-white'>Custom</span>{' '}
                Phone Case
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Capture your imagination with your own,{' '}
                <span className='font-semibold'>unique</span> phone case.
                swaggy allows you to add to your swag, not just your
                phone case.
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-600' />
                    german made china price
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-600' />2 year warranty
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-600' />
                    iphonex-iphone15 support
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-1.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-3.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-5.jpg'
                    alt='user image'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                    <Star className='h-4 w-4 text-purple-600 fill-purple-600' />
                  </div>

                  <p>
                    <span className='font-semibold'>11,250</span> satisfied customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <img
                src='/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <img
                src='/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />
              <Phone className='w-64' imgSrc='/testimonials/1.jpg' />
            </div>
          </div>
        </Maxwidthwrapper>
      </section>
      <section className='bg-slate-100 grainy-dark py-24'>
        <Maxwidthwrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              What our{' '}
              <span className='relative px-2'>
                clients{' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
              </span>{' '}
              say
            </h2>
            <img src='/swaggy pic 2.png' className='w-24 order-0 lg:order-2' />
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "The case feels durable and I have the confidence to dislay it with later models and{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    the image is hd
                  </span>
                  , KEEP IT UP"
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-1.png'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>zj heno</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-purple-600' />
                    <p className='text-sm'>verified customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
                <Star className='h-5 w-5 text-purple-600 fill-purple-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "I love my different colored case black silcone is so basic,{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    hasnt faded 
                  </span>
                  . I love it."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-4.jpg'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>muhindi</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-purple-600' />
                    <p className='text-sm'>Verified customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Maxwidthwrapper>

        <div className='pt-16'>
          <Reviews />
        </div>
      </section>

      <section>
        <Maxwidthwrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Upload your picture and get{' '}
                <span className='relative px-2 bg-purple-600 text-white'>
                  your custom case
                </span>{' '}
                immediately
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png'
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/3.jpg'
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <Phone className='w-60' imgSrc='/3.jpg' />
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />
              german quality material
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />
              gloss and matte finish available
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />
              port covers optional
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />5 year
              warranty
            </li>

            <div className='flex justify-center'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8',
                })}
                href='/configure/upload'>
                Create your case <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>
          </ul>
        </Maxwidthwrapper>
      </section>
    </div>
  )
}