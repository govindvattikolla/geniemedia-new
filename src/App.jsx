
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {lazy, Suspense} from 'react'
import './App.css'
import Header from './components/Header'

import Footer from './components/Footer'
import AboutPage2 from './pages/AboutPg-2';


const Homepage = lazy(()=> import ('./pages/Home') ) 
const AboutPage = lazy(()=> import('./pages/About'))
const DigitalMarketing = lazy(()=> import('./pages/DigitalMarketing'))
const WebDevPg = lazy(()=> import('./pages/Websites'))
const ProductionHouse = lazy(()=> import('./pages/Production'))
const PodcastStudio = lazy(()=> import('./pages/Podcast'))
const Projects = lazy(()=> import('./pages/Projects'))
const Reviews = lazy(()=> import('./pages/Reviews'))


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />

          <Suspense
           fallback={
         <div className="flex min-h-[40vh] items-center justify-center">
           <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-purple-600"></div>
         </div>
          }
         >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-2" element={<AboutPage/>} />
          <Route path='/digitalMarketing' element={<DigitalMarketing/>} />
           <Route path='/webDevelopment' element={<WebDevPg/>} />
           <Route path='/productionHouse' element={<ProductionHouse/>} />
           <Route path='/podcastStudio' element={<PodcastStudio/>} />
           <Route path='/about' element={<AboutPage2/>} />
           <Route path='/projects' element={<Projects/>} />
           <Route path='/reviews' element={<Reviews/>} />
           
         
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>

    
    </>
  )
}

export default App
