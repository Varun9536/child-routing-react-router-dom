import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Navbar from './components/navbar/Navbar'
import Aboutus from './components/navbar/Aboutus'
import Home from './components/navbar/home'
import Pricing from './components/navbar/Pricing'
import Products from './components/navbar/Products'
import Details from './components/navbar/About/Details'
import Address from './components/navbar/About/Address'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>

            <Route path='/aboutus' element={<Aboutus />}>
              <Route path='details' element={<Details />}>

              </Route>
            </Route>
            <Route path="address" element={<Address />}></Route>

            <Route path='/home' element={<Home />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/products' element={<Products />}></Route>


          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
