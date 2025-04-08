
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/myheader/myheader'
import { Section1 } from './components/section1/section1'
import { Section2 } from './components/section2/section2'
import { Section3 } from './components/section3/section3'
import { Footer } from './components/footer/footer'


function App() {

  return (
    <>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </>
  )
}

export default App
