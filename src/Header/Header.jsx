import React from 'react'
import HeaderContent from './HeaderContent'
import HeaderInput from './HeaderInput'
import HeaderIcons from './HeaderIcons'

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center px-5 py-4 border-b-2 border-gray-200'>
      <div>
      <HeaderContent/>
      </div>
      <div>
      <HeaderInput/>
      </div>
      <div>
      <HeaderIcons/>
      </div>
    </div>
    </>
  )
}

export default Header