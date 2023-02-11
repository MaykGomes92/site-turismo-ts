import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { ListaDeHoteis, PropsHoteis, ImagesHoteis } from "../../listaHoteis";
import {BiStar} from 'react-icons/bi'
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
    <h1>Sky Teamm2</h1>
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
      <div className="notaHotel">
        <BiStar/>
        <BiStar/>
        <BiStar/>
        <BiStar/>
        <BiStar/>
      </div>
    </div>
    <div className="informacoesRight">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo cumque dolorum eveniet provident iste id odit illum molestiae quisquam exercitationem dolores, alias, ex ducimus veritatis ab quae amet eaque.</p>
    </div>
   </div>
  </main>
 );
};

export default HotelEscolhido;
