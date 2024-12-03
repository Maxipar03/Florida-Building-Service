import Worker from "../../assets/cleaning-guy-1.webp"

function Banner() {

    return (
        <div className='homeImgBanner'>
            <div className="layout"></div>
            <div className='content'>
                <div className='contentText'>
                    <h1>Transform Your Space: <strong className='bannerStrongText'>Professional Construction Cleaning</strong> in Florida</h1>
                    <h3>Is your project completed and needs to be ready for handover? Our team of construction cleaning experts in Florida is here to assist you with any of these services: Rough Clean, Final Clean, Touch-Up.
                    </h3>
                    <a href="https://calendly.com/floridabuildservices/informative-meet" target="_blank">Schedule a meet</a>
                </div>
                <div className='contentImg'>
                    <img src={Worker} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner