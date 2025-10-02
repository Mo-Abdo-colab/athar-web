import Logowh from './assets/logo-wh.svg'

function Footer() {
    return (
        <div>
            <footer className="mt-5 py-5">
                <div className="container">
                    <div className="row text-center text-md-start">
                        <div className="col-md-3 mb-3">
                            <img src={Logowh} className="color-white"/>
                        </div>
                            
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold">About</h6>
                            <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Our Company</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Our Story</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold">Information</h6>
                            <p>Commercial Registration: 1010046507</p>
                            <p>P.O. Box: 6680</p>
                            <p>Riyadh: 11452</p>
                            <p>Telephone: 2164454</p>
                            <p>Mobile: 0596475546</p>
                        </div>

                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold">Location</h6>
                            <p>4034, Al Olaya, Riyadh Kingdom of Saudi Arabia.</p>
                            <h6 className="fw-bold">Contact</h6>
                            <p>arabbusinessest@gmail.com</p>
                            <p>+966596475546</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
