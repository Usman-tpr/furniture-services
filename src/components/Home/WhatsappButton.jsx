import React from 'react'
import { Link } from 'react-router-dom'

const WhatsappButton = () => {
  return (

    <Link
      to='https://wa.me/03489324934'
      className='fixed bottom-16 right-16 hover:scale-125  '>
      <img src="/assets/images/whatsapp/whatsapp.png"
       className='w-16 hover:-24'
        alt="" />

    </Link>
  )
}

export default WhatsappButton