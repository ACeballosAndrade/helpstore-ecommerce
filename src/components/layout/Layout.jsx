import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routes/Routers'

const Layout = () => {
  //Se crea el Layout que servirá de plantilla para todo el sitio
  return (
    <>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout