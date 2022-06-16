import React from 'react'
import Carousel from 'react-grid-carousel'



  let ciudades=[
      {
          nombre:"New York",
          imagen:"https://www.amfeafip.org.ar/uploads/2022/05/20220504012459000000_new-york-1-1.jpg"
      },
      {
          nombre:"Madrid",
          imagen:"https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg"
      },
      {
        nombre:"Buenos Aires",
        imagen:"http://cdn.cnn.com/cnnnext/dam/assets/160129201107-buenos-aires-obelisk.jpg"
      },
      {
          nombre:"Paris",
          imagen:"https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?fit=1024%2C685&ssl=1"
      },
      {
          nombre:"Rio de Janeiro",
          imagen:"https://img4.viajar.elperiodico.com/72/1c/e5/cristo-redentor.-rio-de-janeiro-brasil-620x415.jpg"
      },
      {
        nombre:"Roma",
          imagen:"https://mihistoriauniversal.com/wp-content/uploads/coliseo-romano-imperio-roma.jpg"
      },
      {
          nombre:"Bariloche",
          imagen:"https://media.staticontent.com/media/pictures/60d1c917-6fac-4450-87bd-aaae621e3b9f"
      }, 
      {
          nombre:"Miami",
          imagen:"https://www.viajarmiami.com/img/guia-viaje-miami.jpg"
      },
      {
          nombre:"Moscow",
          imagen:"https://www.elviejotopo.com/wp-content/uploads/2016/03/1048934.jpg"
      },
      {
          nombre:"London",
          imagen:"https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg"
      },
      {
          nombre:"Dubai",
          imagen:"https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/dubai-beaches/spiagge-dubai_mobile.jpg.image.694.390.low.jpg"
      },
      {
        nombre:"Barcelona",
        imagen:"https://i.natgeofe.com/n/295349af-5e41-4681-9497-58d72eaf8254/temple-barcelona-spain.jpg"
      }
  ]


const Gallery = () => {
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
    },
  {
    breakpoint: 400,
    cols: 2,
    rows: 2,
    gap: 2,
    loop: true, 
  },
  {
      breakpoint: 480,
      cols: 2,
      rows: 1,
      gap: 2,
      loop: true, 
    },
    {
      breakpoint: 320,
      cols: 1,
      rows: 1,
      gap: 2,
      loop: true, 
    }
]}>
{ciudades && ciudades.map(elemento=>
  <Carousel.Item key="index">
    <h3 className='h3Carrousel'>{elemento.nombre}</h3>
   <img className='imagenCarrousel' src={elemento.imagen} alt={elemento.nombre} />
   </Carousel.Item>
     )}
    </Carousel>
  </>
 )
}
export default Gallery