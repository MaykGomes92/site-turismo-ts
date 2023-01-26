import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

function MainListas()  {

 const dadosSlide = React.useRef<HTMLDivElement>(null)

 function slideEsquerda(){

 }

 function slideDireita(){
  console.log(dadosSlide.current?.scrollLeft)
  if(dadosSlide.current !== null) {
   dadosSlide.current.scrollLeft += dadosSlide.current.offsetWidth
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
    <Link className="voltar" to='/'><RxDoubleArrowLeft/></Link>
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
     <BsArrowLeftCircle className="arrowLeft"/>
     <BsArrowRightCircle className="arrowRight" onClick={slideDireita}/>
    <div className="rightSide" ref={dadosSlide}>
     <div className="destinosImages">
      <div className="destino1">
       <img src="./rj-1-p.jpg" alt="" />
       <div className="descriptions">
        <div className="descriptionLeft">
         <img src="rj-2.jpg" alt="" />
        </div>
        <div className="descriptionRight">
         <h1>Copacabana Palace</h1>
         <p>
          O Hotel Copacabana Palace é um hotel de luxo localizado na Praia de
          Copacabana, no Rio de Janeiro, Brasil. Fundado em 1923, é considerado
          um ícone da cidade e um dos hotéis mais famosos do Brasil. Possui
          quartos e suítes luxuosos, piscina ao ar livre, spa, academia,
          restaurantes renomados e vista para a praia.
         </p>
         <ul>
          <li>
           <p>
            212 <br /> <span>Quartos</span>
           </p>
          </li>
          <li>
           <p>
            314 <br /> <span>Hóspedes</span>
           </p>
          </li>
          <li>
           <p>
            9.7 <br /> <span>Nota</span>
           </p>
          </li>
          <li>
           <p>
            Sim <br /> <span>Pet's</span>
           </p>
          </li>
         </ul>
        </div>
       </div>
      </div>
      <div className="destino2">
       <img src="./disney-1.jpg" alt="" />
       <div className="descriptions">
        <div className="descriptionLeft">
         <img src="disney-2.jpg" alt="" />
        </div>
        <div className="descriptionRight">
         <h1>Homewood Suites</h1>
         <p>
          Localizado a 8,6 km do Disney's Boardwalk, o Homewood Suites By Hilton
          Orlando Flamingo Crossings, Fl oferece acomodações 3 estrelas em
          Orlando e dispõe de churrasqueira.
         </p>
         <ul>
          <li>
           <p>
            212 <br /> <span>Quartos</span>
           </p>
          </li>
          <li>
           <p>
            314 <br /> <span>Hóspedes</span>
           </p>
          </li>
          <li>
           <p>
            9.7 <br /> <span>Nota</span>
           </p>
          </li>
          <li>
           <p>
            Sim <br /> <span>Pet's</span>
           </p>
          </li>
         </ul>
        </div>
       </div>
      </div>
      <div className="destino3">
       <img src="./punta-caribe-1.jpg" alt="" />
       <div className="descriptions">
        <div className="descriptionLeft">
         <img src="punta-caribe-2.jpg" alt="" />
        </div>
        <div className="descriptionRight">
         <h1>Copacabana Palace</h1>
         <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          nihil deserunt dolore accusantium deleniti voluptate vero velit, in
          consequatur minus officiis voluptatem quia non impedit veritatis .
         </p>
         <ul>
          <li>
           <p>
            212 <br /> <span>Quartos</span>
           </p>
          </li>
          <li>
           <p>
            314 <br /> <span>Hóspedes</span>
           </p>
          </li>
          <li>
           <p>
            9.7 <br /> <span>Nota</span>
           </p>
          </li>
          <li>
           <p>
            Sim <br /> <span>Pet's</span>
           </p>
          </li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </main>
 );
};

export default MainListas;
