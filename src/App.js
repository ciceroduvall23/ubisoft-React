import React from 'react';


import Header from './components/header';
import Sidebar from './components/sidebar'
import Slide from './components/slide'

export default function App() {
  return (
   <div>
     <Sidebar />
     <div className='divcontent'>
      <h2></h2>
       <h2>OBTENHA SPLINTER CELL PARA PC DE GRAÇA! </h2>
       <button>Saiba Mais</button>
     </div>
    <Header/>
    
    <div className='Explorar-jogos'>
            <h3>  Explorar mais jogos  
</h3>
          </div>
    <Slide/>

    <div className='button-slide'>
    <a href='https://www.ubisoft.com/pt-br/'>Ver todos os jogos</a>
    </div>

   </div>
    
  );
}