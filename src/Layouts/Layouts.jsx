import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "../index.css"

function Layouts({children}) {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default Layouts