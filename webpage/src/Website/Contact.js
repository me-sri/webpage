import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='mt-5'>
      <Container>
      <h1 className='text-center mt-5'>Wellcome To Contact Page</h1>
      <ContactForm/>
      </Container>
    </div>
  )
}

export default Contact



