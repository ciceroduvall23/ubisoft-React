import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function App() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
      <MDBTabs pills fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
          Link
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            Very very very very long link
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
            Another link
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}>
            <div className='news-one'>
           
           <div>
           <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/lHoMuncTgIO6KyQ8Dx9ta/ad77dcff41a5be2bf473960e37a0c563/BrandNewsArticle_winter-generic-2022_960x540_.jpg" alt="Como aproveitar ao máximo a liquidação de verão da Ubisoft" loading="lazy"/>
           <p>15 dezembro 2022</p>
              <h3>Como aproveitar ao máximo a liquidação de verão da Ubisoft</h3>   
           </div>

           <div className='news-div'>
           <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4BfqdeOqOcUZTvc7S43TrN/49f0e806b588b97c0d130a47d1582274/BWH_Legend57Tezca_ProductArt_960x540.jpg" alt="Tezca the Luchador joins the fight!" loading="lazy"/>    
              <p>15 dezembro 2022</p>
              <h3>Como aproveitar ao máximo a liquidação de verão da Ubisoft</h3>   
          </div>
           

           <div className='news-div'>
           <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2xGGkHUTaEe3CAdC1rWXHf/fe659f4170f926e6e13809c2fa490948/Artist_Bundle_Retrodisaster_Header.jpg" alt="PROGRAMA DE PACOTES DE ARTISTAS DA COMUNIDADE Y7S4: RETRODISASTER" loading="lazy"/>  
           <p>15 dezembro 2022</p>
              <h3>Como aproveitar ao máximo a liquidação de verão da Ubisoft</h3>   
             </div>
           

           <div className='news-div'>
           <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6u4219PLBlApxII8xjIQar/cd8148e30eb7fef246cb2f5b579459c9/RC_S3_Neo-Retro_Overview_Header.png" alt="Roller Champions: visão geral e notas da atualização de Neo Retrô" loading="lazy"/>        
           <p>15 dezembro 2022</p>
              <h3>Como aproveitar ao máximo a liquidação de verão da Ubisoft</h3>   
              </div>
           
           <div className='news-div'>
           <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/A4pgoCpbDP7kSeYKLMRZR/3e9d77680b52211b37a1eea98303e2db/WinterWonderland_thumbnail.jpg" alt="Hoje a noite é bela..." loading="lazy"/>  
           <p>15 dezembro 2022</p>
              <h3>Como aproveitar ao máximo a liquidação de verão da Ubisoft</h3>   
                    </div>
          
           </div>
            </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}> 
         <div>
           <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/lHoMuncTgIO6KyQ8Dx9ta/ad77dcff41a5be2bf473960e37a0c563/BrandNewsArticle_winter-generic-2022_960x540_.jpg" alt="Como aproveitar ao máximo a liquidação de verão da Ubisoft" loading="lazy"/>
           </div>
           </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>
            
            Tab 3 content
            
            </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}