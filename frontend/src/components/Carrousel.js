import React, { useEffect } from 'react'
import Carousel from 'react-grid-carousel'
import { useDispatch, useSelector } from 'react-redux'
import citiesAction from "../redux/actions/citiesActions"


const Gallery = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(citiesAction.getAllCities()) 
    // eslint-disable-next-line 
  },[])
  
  const cities = useSelector(store=> store.citiesReducers.cities)
  console.log(cities);
  return (
    <>
    <h2 className='h2Carrousel'> Popular MyTineraries </h2>

    <Carousel className="CarruselContenedor" loop mobileBreakpoint={300}
   
responsiveLayout={[
  {
      breakpoint: 1920,
      cols: 2,
      rows: 2,
      gap: 2,
      loop: true,
      autoplay: 3000
    },
  {
    breakpoint: 400,
    cols: 2,
    rows: 2,
    gap: 2,
    loop: true,
    autoplay: 3000 
  },
  {
      breakpoint: 480,
      cols: 1,
      rows: 4,
      gap: 2,
      loop: true, 
      autoplay: 3000
    },
    {
      breakpoint: 320,
      cols: 1,
      rows: 4,
      gap: 2,
      loop: true, 
      autoplay: 3000
    }
]}>

{cities?.map((city,index)=>
                <Carousel.Item key={index}>
                 <h3 className='h3Carrousel'>{city.name}</h3>
                    <img className='imagenCarrousel' src={city.image} alt="imagen carrousel" />
                 
                </Carousel.Item>
            )}

    </Carousel>
  </>
 )
}
export default Gallery
