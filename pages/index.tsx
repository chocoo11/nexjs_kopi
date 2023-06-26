import Menu from './menu'
import Navbar from './Navbar'
import Carousel from './carousel'
import Produk from './produk'
import Splitscreen from './splitscreen'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Splitscreen />
    <Produk />
    <Footer />
    </>
  )
}
