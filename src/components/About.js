function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center img-class">
            <img alt="about" src="../img/FastBanner.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">Quem Somos</h2>
            <p className="main-p">
            A Fast Içamentos é uma empresa especializada em içamentos e transporte vertical, com grande conhecimento e tecnologia exclusiva para esse mercado.

Com equipes altamente treinadas e equipamentos próprios para içar, estamos prontos para atender as necessidades de içamento de sua empresa ou residência.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
