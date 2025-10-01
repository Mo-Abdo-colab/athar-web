import verify from './assets/verify.svg'

function BookingModal() {
        const [showModal, setShowModal] = useState(false)
    
    return (
        <div>
        <div className="modal fade show d-block " tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered bg-transparent">
                        <div className="modal-content text-center m-4 py-5">
                                <div><img src={verify} /></div>
                        <h2 className="mb-3">Booking Confirmed</h2>
                        <p>
                            Thank you for choosing Athar. Our team will contact you shortly to schedule
                            a site visit and confirm all the details.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-outline-dark " onClick={() => setShowModal(false)}>
                            Edit booking
                            </button>
                            <button className="btn gohomebutton text-light" onClick={() => setShowModal(false)}>
                            Go home
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
    )
}

export default BookingModal
