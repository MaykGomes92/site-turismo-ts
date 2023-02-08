import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { ListaDeHoteis, TypesHoteis } from "../../listaHoteis";
import Header from "../Header";

const HotelEscolhido = () => {
 const { id } = useParams();
 const [filtrarListaDeHoteis, setFiltrarHoteis] =
  React.useState<TypesHoteis[]>();

 React.useEffect(() => {
  setFiltrarHoteis(
   ListaDeHoteis.filter((itens, index) => {
    return itens.title.includes(id !== undefined ? id : "");
   })
  );
 }, [id]);

 return (
  <>
   <header className="headerPageHotelEscolhido">
    <Header />
    <h1>Sky Team</h1>
   </header>
   {filtrarListaDeHoteis &&
    filtrarListaDeHoteis.map((itens: any) => (
     <div key={itens.title} className="container">
      <h1>{itens.title}</h1>
      <p>{itens.descricao}</p>
     </div>
    ))}
  </>
 );
};

export default HotelEscolhido;
