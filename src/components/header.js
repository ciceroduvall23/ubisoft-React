import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import  './App.css';

export default function App() {
  return (
/*  

   <MDBCarouselItem>
          <MDBCarouselElement src='https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2akkSpYZIk3QtuazDu8QfT/3496158de37a30a46a4ac5077f28efc3/ubi-homescreen-ac15-bg-desktop.jpg' alt='...' />
          <MDBCarouselCaption className='buttom-header'>
            <h5>Second slide label</h5>
            <p>asdasdasda.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3B7cGKvhoegY9kOV6OKQcp/0e3ba32959c58e4df569b943b8a0d0cc/R6Ex_keyart__1_.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>




*/
    
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>

     
          <MDBCarouselElement src='https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2QxxVmr7ec6oUjiBOmLiZ2/e4d7b144e01bcfacd2d702384ac2839a/ubi-homescreen-rabbids_party-bg-desktop.jpg' alt='...' />
          <MDBCarouselCaption className='buttom-header'>
            <h3>A TEMPORADA 2 DE RIDERS REPUBLIC ESTÁ NO AR!</h3>
            <p>Compita em um novo modo 6x6 e conquiste a vitória na arena Showdown. Jogue agora!</p>
           <button>Saiba Mais</button>
           <button>Compre agora</button>
          </MDBCarouselCaption>
        </MDBCarouselItem>

     
      </MDBCarouselInner>
    </MDBCarousel>
  
  );
}


