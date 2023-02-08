import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { ListaDeHoteis, PropsHoteis, ImagesHoteis } from "../../listaHoteis";
import Header from "../Header";

const HotelEscolhido = () => {
 const { id } = useParams();
 const [filtrarListaDeHoteis, setFiltrarHoteis] = React.useState<PropsHoteis[]>(
  []
 );

 React.useEffect(() => {
  setFiltrarHoteis(
   ListaDeHoteis.filter((itens, index) => {
    return itens.title.includes(id !== undefined ? id : "");
   })
  );
 }, [id]);

 return (
  <main className="hotelEscolhidoContent">
   <header className="headerPageHotelEscolhido">
    <Header />
    <h1>Sky Team</h1>
   </header>
   {filtrarListaDeHoteis &&
    filtrarListaDeHoteis.map((itens) => (
     <h1 className="localizacaoHotel">{itens.localizacaoHotel}</h1>
    ))}
   <div className="conteudoDaPage">
    <div className="contentImages">
     {ImagesHoteis.map((itens, index) => (
      <div key={index} className="images">
       <img src={itens} alt="fotos hotel" />
      </div>
     ))}
    </div>
    <div className="descricaoLeft">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi officia, ipsum numquam provident rem corporis labore nesciunt, non unde nobis, facilis tempore. Amet quos, ad neque qui quae ab!</p>
    </div>
    <div className="informacoesRight">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo cumque dolorum eveniet provident iste id odit illum molestiae quisquam exercitationem dolores, alias, ex ducimus veritatis ab quae amet eaque.</p>
    </div>
   </div>
  </main>
 );
};

export default HotelEscolhido;
