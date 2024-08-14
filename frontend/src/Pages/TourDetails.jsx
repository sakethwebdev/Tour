

import React from 'react'
import '../styles/tour-details.css'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import { Col, Container, Row } from 'reactstrap'

const TourDetails = () => {

  const {id} = useParams()
  
  const tour = tourData.find(tour => tour.id === id)
const {photo , title, desc ,pice , reviews, city , distance, maxGroupSize}=tour 

  return (
    
    <>
    <Container>
      <Row>
        <Col lg='8' >
          <div className="tour__content">
            <img src={photo} alt="" />

            <div className="tour__info">
              <h2>{title}</h2>
            </div>
          </div>
        
        
        </Col>
      </Row>
    </Container>

    
    
    </>
  )
}

export default TourDetails;