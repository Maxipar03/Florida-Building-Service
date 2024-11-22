import { useState } from 'react'
import fbsLogo from "./assets/Group-17-FBS-1.svg"
import serviceCleaning from "./assets/ImgCleaning.png"
import serviceDemolition from "./assets/ImgDemolition.png"
import workerBanner from "./assets/pngtree-construction-worker-engineer-png-image_11500172.png"

function App() {

  const apiKey = import.meta.env.VITE_IDFORM

  return (
    <>
      <header>
        <h1>Florida Building Service</h1>
        <img src={fbsLogo} alt="" />
      </header>
      <main>
        <div className='homeImgBanner'>
          <div className='content'>
            <div className='contentText'>
              <h1>Transform Your Space: <strong className='bannerStrongText'>Professional Construction Cleaning</strong> in Florida</h1>
              <h3>Is your project complete, but the space still needs a final touch? Our expert construction cleaning team in Florida is here to turn the chaos into a spotless and safe place. Schedule a meeting to learn how we can help deliver clean, ready-to-use spaces.
              </h3>
              <button>Schedule a meet</button>
            </div>
            <div className='contentImg'>
              <img src={workerBanner} alt="" />
            </div>
          </div>
        </div>
        <h1 className='titleSection'>About us</h1>
        <section className='aboutUsSection'>
          <div className='aboutUsContainer'>
            <h2>Company Overview</h2>
            <h3>Welcome to <strong>Florida Build & Services </strong>, Florida's leading demolition and construction cleaning service, dedicated to ensuring every construction site we touch is spotless and ready for the next phase. With years of experience in the construction and cleaning industries, we understand the unique challenges of maintaining a clean and safe construction environment.</h3>
          </div>
          <div className='aboutUsContainer'>
            <h2>Our Mission</h2>
            <h3>At Florida Build & Services, our mission is to provide top-quality demolition and cleaning services designed specifically for construction projects. We strive to enhance the efficiency and safety of construction sites by delivering meticulous cleaning solutions that meet the highest industry standards.</h3>
          </div>
        </section>
        <h1 className='titleSection'>Services</h1>
        <section className='aboutUsSection'>
          <div className='serviceCard'>
            <p className='serviceText'>Cleaning</p>
            <img src={serviceCleaning} alt="" />
          </div>
          <div className='serviceCard'>
            <p className='serviceText'>Demolition</p>
            <img src={serviceDemolition} alt="" />
          </div>
        </section>
        <h1 className='titleSection'>How It Works?</h1>
        <section className='stepsSection'>
          <div className='stepItem'>
            <h1 className='numberStep'>01</h1>
            <div className="contentStep">
              <h2 className="titleStep">Request a Quote</h2>
              <h3 className="descriptionStep">Fill out our online form, and a representative will contact you for a consultation.</h3>
            </div>
          </div>
          <div className='stepItem'>
            <h1 className='numberStep'>02</h1>
            <div className="contentStep">
              <h2 className="titleStep">Personalized Proposal</h2>
              <h3 className="descriptionStep">Get a custom cleaning plan and a transparent, no-hidden-fees quote.</h3>
            </div>
          </div>
          <div className='stepItem'>
            <h1 className='numberStep'>03</h1>
            <div className="contentStep">
              <h2 className="titleStep">Schedule the Service</h2>
              <h3 className="descriptionStep">Choose dates and times that fit your project’s timeline; we’ll coordinate with your team.</h3>
            </div>
          </div>
          <div className='stepItem'>
            <h1 className='numberStep'>04</h1>
            <div className="contentStep">
              <h2 className="titleStep">Service Execution</h2>
              <h3 className="descriptionStep">Our trained professionals deliver quality work with regular inspections.</h3>
            </div>
          </div>
          <div className='stepItem'>
            <h1 className='numberStep'>05</h1>
            <div className="contentStep">
              <h2 className="titleStep">Ongoing Support</h2>
              <h3 className="descriptionStep">Receive updates on progress and access customer support for any adjustments.</h3>
            </div>
          </div>
        </section>
        <h1 className='titleSection'>Get In Touch</h1>
        <section className='sectionContact'>
          <form className='formContainer' action={`https://formspree.io/f/${apiKey}`}  method="POST">
            <input className='formInput' name='NameInput' placeholder='Full Name' type="text" required/>
            <input className='formInput' name='EmailInput' placeholder='Email' type="text" required/>
            <input className='formInput' name='PhoneInput' placeholder='Phone Number' type="text" required/>
            <input className='formInput' name='CompanyInput' placeholder='Company' type="text" required/>
            <input className='formInput' name='LocationInput' placeholder='Location' type="text" required/>
            <button className='formButton'>Submit</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
