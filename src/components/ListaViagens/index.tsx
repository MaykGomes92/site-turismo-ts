import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

import { ListaDeHoteis } from "../../listaHoteis";

function MainListas() {
 const dadosDaDivSlide = React.useRef<HTMLDivElement>(null);

 function arrowSlideEsquerda() {
  if (dadosDaDivSlide.current !== null) {
   dadosDaDivSlide.current.scrollLeft -= dadosDaDivSlide.current.offsetWidth;
  }
 }

 function arrowSlideDireita() {
  if (dadosDaDivSlide.current !== null) {
   dadosDaDivSlide.current.scrollLeft += dadosDaDivSlide.current.offsetWidth;
  }
 }

 return (
  <main className="contentListasViagens">
   <div className="mainListas">
    <Link to="/">
     <img
      className="logoViagens"
      src="./logo-area-1.png"
      alt="logo da empresa"
     />
    </Link>
    <Link className="voltar" to="/">
     <RxDoubleArrowLeft />
    </Link>
    <div className="leftSide">
     <div className="textTitle">
      <h1>Sky Team</h1>
      <p>Agência de Turismo com destinos em todo o mundo!</p>
     </div>
     <ul className="links">
      <li>
       <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/MaykGomes92"
       >
        <AiFillGithub />
       </a>
      </li>
      <li>
       <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/mayk-gomes-11b86222b/"
       >
        <BsLinkedin />
       </a>
      </li>
      <li>
       <a
        target="_blank"
        rel="noreferrer"
        href="https://portfolio-delta-three-11.vercel.app/"
       >
        Portfólio
       </a>
      </li>
     </ul>
    </div>
    <BsArrowLeftCircle className="arrowLeft" onClick={arrowSlideEsquerda} />
    <BsArrowRightCircle className="arrowRight" onClick={arrowSlideDireita} />
    <div className="rightSide" ref={dadosDaDivSlide}>
     <div className="destinosImages">
      {ListaDeHoteis.map((itens) => (
       <div className="destinos" key={itens.title}>
        <img src={itens.img1} alt="" />
        <h1 className="titleImg">{itens.title}</h1>
        <Link to={itens.title} className="btnVejaMaisImg">
         Veja Mais
        </Link>
        <div className="descriptions">
         <div className="descriptionLeft">
          <img src={itens.img2} alt="" />
         </div>
         <div className="descriptionRight">
          <h1>{itens.title}</h1>
          <p>{itens.descricao}</p>
          <ul>
           <li>
            <p>
             {itens.infoAdicionalQuarto} <br /> <span>Quartos</span>
            </p>
           </li>
           <li>
            <p>
             {itens.infoAdicionalHospedes} <br /> <span>Hóspedes</span>
            </p>
           </li>
           <li>
            <p>
             {itens.infoAdicionalNota} <br /> <span>Nota</span>
            </p>
           </li>
           <li>
            <p>
             {itens.infoAdicionalPets} <br /> <span>Pet's</span>
            </p>
           </li>
          </ul>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </main>
 );
}

export default MainListas;
