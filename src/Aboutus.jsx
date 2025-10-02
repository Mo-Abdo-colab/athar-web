import Aboutimage from './assets/aboutus.png'

function Aboutus() {
  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row text-center">
                <div className="col-12">
                    <h1>About Us</h1>
                  </div>
                  <div>
                      <p className="px-5 mt-3">Excellence is not an option... it's the foundation of every detail. At Athar, we believe that every space tells a story — and our mission is to make yours unforgettable. We don’t just design or manufacture furniture; we create experiences that bring comfort, elegance, and functionality together in perfect harmony.</p>
                  </div>
                  <div>
                      <img className="img-fluid px-5" src={Aboutimage} />
                  </div>
                  <div>
                      <p className="px-5 mt-3">From meticulous interior design to custom furniture & curtains, and from upholstery to complete maintenance solutions, our team of skilled engineers and craftsmen work with passion and precision to deliver results that last.Choose professionalism. Choose quality. Choose “Ather” because your space deserves nothing less than excellence.</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
