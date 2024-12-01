function Steps() {
    return (
        <section className='stepsSection'>
            <div className='stepItem'>
                <div className="numberStepContainer">
                    <h1 className='numberStep'>01</h1>
                    <i class="fa-solid fa-forward"></i>
                </div>
                <div className="contentStep">
                    <h2 className="titleStep">Request a Quote</h2>
                    <h3 className="descriptionStep">Fill out our online form, and a representative will contact you for a consultation.</h3>
                </div>
            </div>
            <div className='stepItem'>
                <div className="numberStepContainer">
                    <h1 className='numberStep'>02</h1>
                    <i class="fa-solid fa-forward"></i>
                </div>
                <div className="contentStep">
                    <h2 className="titleStep">Personalized Proposal</h2>
                    <h3 className="descriptionStep">Get a custom cleaning plan and a transparent, no-hidden-fees quote.</h3>
                </div>
            </div>
            <div className='stepItem'>
                <div className="numberStepContainer">
                    <h1 className='numberStep'>03</h1>
                    <i class="fa-solid fa-forward"></i>
                </div>
                <div className="contentStep">
                    <h2 className="titleStep">Schedule the Service</h2>
                    <h3 className="descriptionStep">Choose dates and times that fit your project’s timeline; we’ll coordinate with your team.</h3>
                </div>
            </div>
            <div className='stepItem'>
                <div className="numberStepContainer">
                    <h1 className='numberStep'>04</h1>
                    <i class="fa-solid fa-forward"></i>
                </div>
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
    )
}

export default Steps