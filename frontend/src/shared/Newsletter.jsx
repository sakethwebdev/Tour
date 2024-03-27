import React from 'react'
import './newsletter.css'

import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
   <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2> Subscribe now to get useful traveling information</h2>
                    <div className="newsletter__input">
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn newsletter__btn'> Subscribe</button>
                    </div>
                    <p>It is very important for the customer to pay attention to the
                         adipiscing process. To be repulsed, for us. He would rather suffer than what is free in the law. They often provide him with hatred,
                          which is the very inventor of the error of the architect of life to refuse!</p>

                </div>
            </Col>
            <Col lg="6">
                <div className="newsletter__imag">
                    <img src={maleTourist} alt="" />
                </div>

            </Col>
        </Row>
    </Container>
    
   </section>
  )
}

export default Newsletter