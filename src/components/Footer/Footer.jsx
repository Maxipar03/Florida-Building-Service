import fbsLogo from "../../assets/Group-17-FBS-1.svg"

function Footer() {
    return(
        <footer>
        <div className='footerContent'>
        <img src={fbsLogo} className='footerLogo'/>
        <p>© 2024 Florida Build & Service. All rights reserved.</p>
        <h3>Made By: <a href="https://www.stellarstride.net/" target="_blank"><strong>StellarStride</strong></a></h3>
        </div>
      </footer>
    )
}

export default Footer