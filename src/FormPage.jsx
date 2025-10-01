import bookingimg from './assets/booking-image.svg'
import { useState } from 'react'
import verify from './assets/verify.svg'

function FormPage() {
    const [showModal, setShowModal] = useState(false)
    const [country, setCountry] = useState("Saudi Arabia")
    const [phone, setPhone] = useState("+966")


    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(true)
    }
    const handleCountryChange = (e) => {
        const selected = e.target.value
        setCountry(selected)
        if (selected === "Egypt") {
            setPhone("+20")
        } else if (selected === "Saudi Arabia") {
            setPhone("+966")
        } else {
            setPhone("")
        }
    }
    return (
        <div className="container my-5">
        <div className="row align-items-center">
            
            <div className="col-md-6">
            <form onSubmit={handleSubmit} className="row g-3">
                
                <div className="col-md-6 col-6">
                <label className="form-label">
                    First Name <span className="booking-required-text">(Required)</span>
                </label>
                <input
                    className="form-control bg-transparent"
                    type="text"
                    required
                    placeholder="Enter your first name"
                />
                </div>

                <div className="col-md-6 col-6">
                <label className="form-label">
                    Last Name <span className="booking-required-text">(Required)</span>
                </label>
                <input
                    className="form-control bg-transparent"
                    type="text"
                    required
                    placeholder="Enter your last name"
                />
                </div>

                <div className="col-md-6 col-6">
                <label className="form-label">Country Code</label>
                <select className="form-select bg-transparent"
                    value={country}
                    onChange={handleCountryChange}
                >
                    <option>Saudi Arabia</option>
                    <option>Egypt</option>
                </select>
                </div>

                <div className="col-md-6 col-6">
                <label className="form-label">
                    Phone <span className="booking-required-text">(Required)</span>
                </label>
                <input
                    className="form-control bg-transparent"
                    type="text"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>

                <div className="col-12">
                <label className="form-label">Email</label>
                <input
                    className="form-control bg-transparent"
                    type="email"
                    placeholder="Enter your email"
                />
                </div>

                <div className="col-12">
                <label className="form-label">
                    National Address <span className="booking-required-text">(Required)</span>
                </label>
                <input
                    className="form-control bg-transparent"
                    type="text"
                    required
                    placeholder="Enter your address"
                />
                </div>

                <div className="col-md-4 col-12">
                <button type="submit" className="btn btn-dark w-100">
                    Confirm Booking
                </button>
                </div>
            </form>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
                <img src={bookingimg} alt="Booking Illustration" className="img-fluid" />
            </div>
            </div>
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered bg-transparent">
                    <div className="modal-content text-center my-5 py-5">
                    <div><img src={verify} /></div>
                    <h2 className="my-3">Booking Confirmed</h2>
                    <p className="mx-3">
                        Thank you for choosing Athar. Our team will contact you shortly to schedule
                        a site visit and confirm all the details.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-outline-dark" onClick={() => setShowModal(false)}>
                        Edit booking
                        </button>
                        <button className="btn gohomebutton text-light btn-outline-dark" onClick={() => setShowModal(false)}>
                        Go home
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    )
}

export default FormPage
