import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Fast Içamentos</h1>
                <p className="footer-text">
                  Bem-vindo a Fast Içamentos
        
                </p>
              </div>
            
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="mailto:fasticamentos@gmail.com" >fasticamentos@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" >Localizado na Vila Sónia</Link>
                  </li>
                  <li>
                    <Link to="tel:5511951778623" >+55 (11) 95177-8623</Link>
                  </li>
                </ul>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
      <button onClick="" src="" className="whatsapp"><a href="https://wa.me/5511951778623"><img src='../img/whatsapp-logo.png' /></a></button>
    </footer>
  );
}
export default Footer;
