import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Detail from './components/Detail/Detail'
import Footer from './components/Footer/Footer'
import MyWork from './components/MyWork/MyWork'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <Detail />
      <About />
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
