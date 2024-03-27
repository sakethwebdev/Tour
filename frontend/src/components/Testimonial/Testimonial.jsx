
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonial = () => {
    const settings={
        dots:true,
        infinity:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:922,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinity:true,
                    dots:true,

                },

            },

            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    
                },

            },
        ]
        
    }
  return (

    


   <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>The company itself is a very successful company. They leave the thing that hinders the body's flexibility and other functions, something convenient! For those who accept their debts leave training and pleasure for pleasure, rejecting flattery.</p>
        <div className='d-flex align-items-center gap-4 mt-3 '>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt- 3'>Sam Doe</h6>
                <p> Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>The company itself is a very successful company. They leave the thing that hinders the body's flexibility and other functions, something convenient! For those who accept their debts leave training and pleasure for pleasure, rejecting flattery.</p>
        <div className='d-flex align-items-center gap-4 mt-3 '>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt- 3'>Lisa Jon</h6>
                <p> Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>The company itself is a very successful company. They leave the thing that hinders the body's flexibility and other functions, something convenient! For those who accept their debts leave training and pleasure for pleasure, rejecting flattery.</p>
        <div className='d-flex align-items-center gap-4 mt-3 '>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt- 3'>Kenny jon </h6>
                <p> Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>The company itself is a very successful company. They leave the thing that hinders the body's flexibility and other functions, something convenient! For those who accept their debts leave training and pleasure for pleasure, rejecting flattery.</p>
        <div className='d-flex align-items-center gap-4 mt-3 '>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt- 3'>Sam Doe</h6>
                <p> Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>The company itself is a very successful company. They leave the thing that hinders the body's flexibility and other functions, something convenient! For those who accept their debts leave training and pleasure for pleasure, rejecting flattery.</p>
        <div className='d-flex align-items-center gap-4 mt-3 '>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt- 3'>Lisa Jon</h6>
                <p> Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>The company itself is a very successful company. They leave the thing that hinders the body's flexibility and other functions, something convenient! For those who accept their debts leave training and pleasure for pleasure, rejecting flattery.</p>
        <div className='d-flex align-items-center gap-4 mt-3 '>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt- 3'>Kenny jon </h6>
                <p> Customer</p>
            </div>
        </div>
    </div>
   </Slider>
  )
}

export default Testimonial