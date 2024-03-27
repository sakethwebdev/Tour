
import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData =[
  {
    imgUrl: weatherImg,
    title:"Calculate Weather",
    desc:"It is very important for the patient to take care of the patient."

  },
  {
    imgUrl: guideImg,
    title:"Best Tour Guid",
    desc:"It is very important for the patient to take care of the patient."

  },
  {
    imgUrl: customizationImg,
    title:"Customization",
    desc:"It is very important for the patient to take care of the patient."

  },

]
const ServiceList = () => {
  return (
    <>
    {
      servicesData.map((item,index)=>(
        <Col lg='3' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))
    }
    
    </>
  )
}

export default ServiceList