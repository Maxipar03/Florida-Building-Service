import serviceCleaning from "../../assets/ImgCleaning.webp"
import serviceDemolition from "../../assets/ImgDemolition.webp"
import serviceRemodeling from "../../assets/charlesdeluvio-6fA1ldyxSbw-unsplash.webp"
import demolitionIcon from "../../assets/demolition.svg"
import cleaningIcon from "../../assets/cleaning.svg"
import remodelingIcon from "../../assets/remodeling.svg"

function servicesCard() {
    return (
        <section className='aboutUsSection'>
            <div className='serviceCard'>
                <div className="serviceTextContainer">
                    <img src={cleaningIcon}/>
                    <p className='serviceText'>Cleaning</p>
                </div>
                <img className="sectionImgBackround" src={serviceCleaning} alt="" />
            </div>
            <div className='serviceCard'>
                <div className="serviceTextContainer">
                    <img src={remodelingIcon} />
                    <p className='serviceText'>Interior Remodeling</p>
                </div>
                <img className="sectionImgBackround" src={serviceRemodeling} alt="" />
            </div>
            <div className='serviceCard'>
                <div className="serviceTextContainer">
                    <img src={demolitionIcon} />
                    <p className='serviceText'>Demolition</p>
                </div>
                <img className="sectionImgBackround" src={serviceDemolition} alt="" />
            </div>
        </section>
    )
}

export default servicesCard