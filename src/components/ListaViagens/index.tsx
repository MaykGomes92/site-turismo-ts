import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
const index = () => {
 return (
  <main className="contentListasViagens">
   <div className="mainListas">
    <Link to="/"><img className="logoViagens" src="./logo-area-1.png" alt="logo da empresa" /></Link>
    <div className="leftSide">
     <div className="textTitle">
      <h1>Sky Team</h1>
      <p>Agência de Turismo com destinos em todo o mundo!</p>
     </div>
     <ul className="links">
      <li>
       <a target='_blank'  rel='noreferrer' href="https://github.com/MaykGomes92"><AiFillGithub/></a>
      </li>
      <li>
       <a target='_blank'  rel='noreferrer' href="https://www.linkedin.com/in/mayk-gomes-11b86222b/"><BsLinkedin/></a>
      </li>
      <li>
       <a target='_blank'  rel='noreferrer' href="https://portfolio-delta-three-11.vercel.app/">Portifolio</a>
      </li>
     </ul>
    </div>
    <div className="rightSide">
     <div className="destinosImages">
      <div className="destino1">
       <img src="./rj-1.webp" alt="" />
       <div className="descriptions">
        <div className="descriptionLeft">
         <img src="rj-2.jpg" alt="" />
        </div>
        <div className="descriptionRight">
         <h1>Copacabana Palace</h1>
         <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          nihil deserunt dolore accusantium deleniti voluptate vero velit, in
          consequatur minus officiis voluptatem quia non impedit veritatis
          .
         </p>
         <ul>
          <li><p>912 <br/> <span>HOURS</span></p></li>
          <li><p>255 <br/> <span>HOURS</span></p></li>
          <li><p>321 <br/> <span>HOURS</span></p></li>
          <li><p>122 <br/> <span>HOURS</span></p></li>
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
         <h1>Copacabana Palace</h1>
         <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          nihil deserunt dolore accusantium deleniti voluptate vero velit, in
          consequatur minus officiis voluptatem quia non impedit veritatis
          .
         </p>
         <ul>
          <li><p>912 <br/> <span>HOURS</span></p></li>
          <li><p>255 <br/> <span>HOURS</span></p></li>
          <li><p>321 <br/> <span>HOURS</span></p></li>
          <li><p>122 <br/> <span>HOURS</span></p></li>
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
          consequatur minus officiis voluptatem quia non impedit veritatis
          .
         </p>
         <ul>
          <li><p>912 <br/> <span>HOURS</span></p></li>
          <li><p>255 <br/> <span>HOURS</span></p></li>
          <li><p>321 <br/> <span>HOURS</span></p></li>
          <li><p>122 <br/> <span>HOURS</span></p></li>
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

export default index;
