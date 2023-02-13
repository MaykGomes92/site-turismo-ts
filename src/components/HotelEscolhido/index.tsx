import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { ListaDeHoteis, PropsHoteis, ImagesHoteis } from "../../listaHoteis";
import { BiStar } from "react-icons/bi";
import Header from "../Header";

const HotelEscolhido = () => {
 const { id } = useParams();
 const [filtrarListaDeHoteis, setFiltrarHoteis] = React.useState<PropsHoteis[]>(
  []
 );

 const [valorDiaria, setValorDiaria] = React.useState(462.63);
 
 function adicionarDesconto() {
  setValorDiaria((event): number => {
   return Number(valorDiaria - valorDiaria * (40 / 100));
  });
 }



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
    filtrarListaDeHoteis.map((itens, index) => (
     <h1 key={index} className="localizacaoHotel">
      {itens.localizacaoHotel}
     </h1>
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
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
     </div>
     {filtrarListaDeHoteis[0] && (
      <h1>{filtrarListaDeHoteis[0].localizacaoHotel}</h1>
     )}
     <p>Estrada Municipal ********* 801 Bairro ******** - ******, 00000-000</p>
     <div className="comodidades">
      <h1>Comodidades</h1>
      <ul>
       <li>
        Número total de quartos:{" "}
        {filtrarListaDeHoteis[0]
         ? filtrarListaDeHoteis[0].infoAdicionalQuarto
         : "555"}
       </li>
       <li>Número de andares (edifício principal): 4</li>
       <li>Suites: 36</li>
      </ul>
     </div>
     <p className="mostrarMais">Mostrar mais ⇩</p>

     <div className="informacoesSobre">
      <h1>
       Sobre {filtrarListaDeHoteis[0] ? filtrarListaDeHoteis[0].title : "555"}
      </h1>
      <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
       perspiciatis nisi sed aliquid totam quisquam nostrum qui excepturi
       quaerat ab recusandae doloribus quo. Optio consectetur pariatur et
       consequatur eius vel? Lorem, ipsum dolor sit amet consectetur adipisicing
       elit. Mollitia voluptatem dolore totam expedita a placeat laudantium
       labore porro et magnam natus tempora ullam voluptatibus, saepe tenetur
       recusandae quaerat. Suscipit, nulla.
      </p>
     </div>
    </div>
    <div className="informacoesRight">
     <div className="resumoReserva">
      <h1>Resumo da Reserva</h1>

      <h2>{filtrarListaDeHoteis[0] ? filtrarListaDeHoteis[0].title : ""}</h2>
      <h2 className="subTitles">Check-in / Check-out</h2>
      <p>08/05/2023 até 09/05/2023 (1 diária)</p>

      <h2 className="subTitles">Hóspedes</h2>
      <p className="borderBottom">2 Hóspedes (2 adultos)</p>

      <div className="informacaoQuarto">
       <h2>Quarto 1</h2>
       <p>Double Standard</p>
       <span>R$ 382,34</span>
       <p>Café da manhã</p>
       <span>Incluso</span>
       <p>Impostos e Taxas</p>
       <span>R$ 80,29</span>
      </div>
      <div className="contentCompra">
       <h1>Sua compra</h1>
       <p>1 diária</p>
       <span>R$ {valorDiaria.toFixed(2)}</span>

       <h2>Para 1 diária</h2>
       <span>R$ {valorDiaria.toFixed(2)}</span>

       <img
        src="../desconto-40.png"
        alt="imagem desconto"
        className="descontoImage"
       />
       <button>Reservar agora</button>
       <button onClick={adicionarDesconto}>Pedir desconto</button>
      </div>
     </div>
    </div>
   </div>
  </main>
 );
};

export default HotelEscolhido;
