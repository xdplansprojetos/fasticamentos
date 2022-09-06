function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      
      <img alt="LogoFast" src={"../img/Logo.png"} className="bannerLogoFast" /> 
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
        <a href="tel:5511951778623">
        Ligar
        </a>
        </button>

        
          
       
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
