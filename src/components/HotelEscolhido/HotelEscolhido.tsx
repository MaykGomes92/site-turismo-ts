import React from "react";
import { useParams } from "react-router-dom";
import { ListaDeHoteis, TypesHoteis } from "../../listaHoteis";

const HotelEscolhido = () => {
 const { id } = useParams();
 const [filtrarListaDeHoteis, setFiltrarHoteis] = React.useState<TypesHoteis[]>();

 React.useEffect(() => {
  setFiltrarHoteis(
   ListaDeHoteis.filter((itens, index) => {
    return itens.title.includes(id !== undefined ? id : "");
   })
  );
 }, [id]);

 return (
  <>
   {filtrarListaDeHoteis &&
    filtrarListaDeHoteis.map((itens: any) => (
     <div key={itens.title}>
      <h1>{itens.title}</h1>
      <p>{itens.descricao}</p>
     </div>
    ))}
  </>
 );
};

export default HotelEscolhido;
