import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        NameInput: '',
        EmailInput: '',
        PhoneInput: '',
        CompanyInput: '',
        LocationInput: '',
    });

    const [errors, setErrors] = useState({});

    const apiKey = import.meta.env.VITE_IDFORM

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false }); 
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = '* Debes completar el campo';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            e.target.submit();
        }
    };


    return (
        <section className='sectionContact'>
            <form onSubmit={handleSubmit} className='formContainer' action={`https://formspree.io/f/${apiKey}`} method="POST">
            <div className="formInputContainer">
                <input className={`formInput ${errors.NameInput ? 'inputError' : ''}`} name='NameInput' placeholder='Full Name' type="text" value={formData.NameInput} onChange={handleChange} />
                {errors.NameInput && <span className="errorText">{errors.NameInput}</span>}
            </div>
            <div className="formInputContainer"> 
                <input className={`formInput ${errors.EmailInput ? 'inputError' : ''}`} name='EmailInput' placeholder='Email' type="text" value={formData.EmailInput} onChange={handleChange}  />
                {errors.EmailInput && <span className="errorText">{errors.EmailInput}</span>}
            </div>
            <div className="formInputContainer">
                <input className={`formInput ${errors.PhoneInput ? 'inputError' : ''}`} name='PhoneInput' placeholder='Phone Number' type="text" value={formData.PhoneInput} onChange={handleChange} />
                {errors.PhoneInput && <span className="errorText">{errors.PhoneInput}</span>}
            </div>
            <div className="formInputContainer"> 
                <input className={`formInput ${errors.CompanyInput ? 'inputError' : ''}`} name='CompanyInput' placeholder='Company' type="text" value={formData.CompanyInput} onChange={handleChange}  />
                {errors.CompanyInput && <span className="errorText">{errors.CompanyInput}</span>}
            </div>
            <div className="formInputContainer">
                <input className={`formInput ${errors.LocationInput ? 'inputError' : ''}`} name='LocationInput' placeholder='Location' type="text" value={formData.LocationInput} onChange={handleChange}  />
                {errors.LocationInput && <span className="errorText">{errors.LocationInput}</span>}
            </div>
                <button className='formButton'>Submit</button>
            </form>
            <div className="formMaps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247620.88614724!2d-89.09429416208322!3d27.504188497606606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1732845624682!5m2!1ses-419!2sar"></iframe>
            </div>
        </section>
    )
}

export default Contact