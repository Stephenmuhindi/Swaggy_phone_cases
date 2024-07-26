import Link from 'next/link'
import Maxwidthwrapper from './Maxwidthwrapper'

const Footer = () => {
  return (
    <footer className='bg-white h-20 relative'>
      <Maxwidthwrapper>
        <div className='border-t border-gray-200' />

        <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} Reserved
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms and conditions
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Data protection Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Auth Session Policy
              </Link>
            </div>
          </div>
        </div>
      </Maxwidthwrapper>
    </footer>
  )
}

export default Footer