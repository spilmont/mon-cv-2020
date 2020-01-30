import React from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Profil from './components/Profil'
import Competences from './components/Competences'
import Competences2 from './components/AutreCompetences'
import Realisation from './components/Realisations'
import Contact from './components/Contact'
import Diplome from './components/Diplome'
import Experience from './components/Experience'
import Footer from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WOW from "wowjs";
import LinkBar from './components/Linkbar'
import $ from 'jquery'
import backtoppage from './images/backtoppage.png'



$(document).ready(function(){
    // au clic sur un lien
    $('.links').on('click', function(evt){
        // bloquer le comportement par défaut: on ne rechargera pas la page
        evt.preventDefault();
        // enregistre la valeur de l'attribut  href dans la variable target
        var target = $(this).attr('href');
        /* le sélecteur $(html, body) permet de corriger un bug sur chrome
        et safari (webkit) */
        $('html, body')
        // on arrête toutes les animations en cours
            .stop()
            /* on fait maintenant l'animation vers le haut (scrollTop) vers
             notre ancre target */
            .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});



class App extends React.Component{

    componentDidMount() {
        const wow = new WOW.WOW();

        wow.init();

    }




    render() {

    return (
    <div className="App">
     <NavBar />
     <Header/>
        <div className='flex-link' >
        <LinkBar/>
        </div>
     <Profil/>
     <section className='skill-container' id='competences'>
         <h2 >Compétences</h2>
         <div className='flex-competence'>
     <Competences/>
         </div>
         <h3>Autres Compétences</h3>
         <div className='flex-competence'>
             <Competences2/>
         </div>
     </section>
        <section className='experience' id='experiences' >
            <h3 >Diplômes</h3>
            <Diplome />
            <h3>Experiences professionelles</h3>
            <Experience/>
        </section>
        <section className='realisation' id='realisations'>
        <h2>Réalisation</h2>
        <div className='realisation-container'>
            <Realisation/>
        </div>
    </section>
     <section id='contact'>
         <h2>Me Contacter</h2>
         <Contact/>
     </section>
        <a id='returnTopPage' className='links' href='#header'><img className='iconTopPage' src={backtoppage} alt='retour en haut de page'/></a>
        <Footer/>

    </div>
  );
    }

}

export default App;
