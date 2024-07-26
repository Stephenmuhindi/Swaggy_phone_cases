import Maxwidthwrapper from '@/components/Maxwidthwrapper'
import Steps from '@/components/Steps'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Maxwidthwrapper className='flex-1 flex flex-col'>
      <Steps />
      {children}
    </Maxwidthwrapper>
  )
}

export default Layout