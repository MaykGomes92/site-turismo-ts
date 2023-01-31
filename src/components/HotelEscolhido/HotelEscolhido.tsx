import React from "react";
import { useParams } from "react-router-dom";
import { ListaDeHoteis, Hoteis } from "../../listaHoteis";

const HotelEscolhido = () => {
 const { id } = useParams();
 const [filtrarHoteis, setFiltrarHoteis] = React.useState<Hoteis[]>();

 React.useEffect(() => {
  setFiltrarHoteis(
   ListaDeHoteis.filter((itens, index) => {
    return itens.title.includes(id !== undefined ? id : "");
   })
  );
 }, [id]);

 return (
  <>
   {filtrarHoteis &&
    filtrarHoteis.map((itens: any) => (
     <div key={itens.title}>
      <h1>{itens.title}</h1>
      <p>{itens.descricao}</p>
     </div>
    ))}
  </>
 );
};

export default HotelEscolhido;
