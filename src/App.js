import React from 'react';


import Header from './components/header';
import Sidebar from './components/sidebar'
import Slide from './components/slide'

export default function App() {
  return (
   <div >
     <Sidebar/>
    <Header/>
    <div className='Explorar-jogos'>
            <h3>  Explorar mais jogos  
</h3>
          </div>
    <Slide/>
   </div>
    
  );
}