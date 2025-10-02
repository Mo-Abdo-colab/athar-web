import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './NavBar.jsx';
import { BrowserRouter } from 'react-router';
import FormPage from './FormPage.jsx';
import Footer from './Footer.jsx';
import Aboutus from './Aboutus.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <FormPage />
        <Aboutus/> {/* that'll be put in different page */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
