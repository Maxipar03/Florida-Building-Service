import ServicesCard from '../components/ServicesCard/ServicesCard'
import Contact from '../components/Contact/Contact'
import Steps from '../components/Steps/Steps'
import AboutUs from '../components/AboutUs/AboutUs'
import Banner from '../components/Banner/Banner'
import "../index.css"

function Home() {
    return (
        <main>
            <Banner />
            <h1 className='titleSection'>About us</h1>
            <AboutUs />
            <h1 className='titleSection'>Services</h1>
            <ServicesCard />
            <h1 className='titleSection'>How It Works?</h1>
            <Steps />
            <h1 className='titleSection'>Get In Touch</h1>
            <Contact />
        </main>
    )
}

export default Home