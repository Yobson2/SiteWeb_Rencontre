import { useState } from 'react'
import "../Styles/home.css"
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const  Home=()=>{
    return (
     <div className='home_page'>
      <NavBar/>
      <img src="https://images.unsplash.com/photo-1522315641900-874dc98a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVsYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
       <div className="contenaire_home">
          <h3>Trouvez votre âme sœur et laissez l'amour guider votre chemin</h3>
          
          <div className="home-btn">
            <button className='btn1_home'><Link to="/login" className='lien'>Connexion</Link></button>
            <button className='btn1_home'><Link to="/registre" className='lien'>S'inscrire</Link></button>
          </div>
       </div>
     </div>
    );
}

export default Home