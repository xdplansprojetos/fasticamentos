import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVIÇOS</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Sofá" img="card1.png" text="Sofás, Buffet, Mesas, Geladeira, Piano, Colchões e Obras de Arte." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Espelhos" img="card2.png" text="Espelhos, Vidros temperados, Cristaleira  e vidros em gerais." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Marmores" img="card3.png" text="Marmores, Granitos, Porcelanato e Pedras Pesadas em Gerais." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Banheiras" img="card4.png" text="Banheiras de Hidromassagem, Spa, Ofurôs, Piscinas e Caixas d'água." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
