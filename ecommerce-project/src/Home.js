import React from 'react';
import "./Home.css";
import Product from  "./Product";

function Home() {
  return (
    <div classname='home'>
        <div className="home__container">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            <div className="home__row">
                <Product
                id="123123123"
                title = 'Scale Your Everest: How to be a Resilient Entrepreneur'
                price={9.99} image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqmdu-vqt69ldk-DTEyQVZr1Bsy69GC1SYtipkIqommJHtlC0G"
                rating={4}
                />
                <Product
                id="234234234"
                title = 'How to Win Friends and Influence People'
                price={17.22} image="https://d1b14unh5d6w7g.cloudfront.net/0671027034.01.S001.LXXXXXXX.jpg?Expires=1687631330&Signature=NTpv4IfrxhwdJ5zEFiMEA4VM~I75lOHHXmeeOTmMvURjaaScNf6vuY2EVC6RlJ3267vTrI2vNP7aPEJuTf0JEja-6CIyCHA0oIcmB57GhtvUbojmtenoABE7DZqofOu9mUS~u4DvNYE1p-bRLaMRG3csbDDYhocB-kfXVJacFd0_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
                rating={5}
                />
                <Product
                id="345345345"
                title ='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'
                price={23.35} image="https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg"
                rating={5}/>
            </div>

            

            <div className="home__row">
                <Product
                id="456456456"
                title ='The Book Thief'
                price={19.99} image="https://m.media-amazon.com/images/P/0375842209.01._SCLZZZZZZZ_SX500_.jpg"
                rating={4}/>
                <Product
                id="567567567"
                title ='The Amazing Adventures of Kavalier & Clay (with bonus content): A Novel'
                price={19.73} image="https://m.media-amazon.com/images/P/0812983580.01._SCLZZZZZZZ_SX500_.jpg"
                rating={4}/>
                <Product
                id="678678678"
                title ='Moby Dick'
                price={33.54} image="https://m.media-amazon.com/images/P/B09FNG4H24.01._SCLZZZZZZZ_SX500_.jpg"
                rating={4}/>
            </div>

            <div className="home__row">
                <Product
                id = "789789789"
                title ='Madame Bovary'
                price={21.27} image="https://d1b14unh5d6w7g.cloudfront.net/B087616M7B.01.S001.LXXXXXXX.jpg?Expires=1687633181&Signature=Uimg2hvloNsdag153Nl7A1Bcd29hw8tsFPerXQV2aCoBQdgMuYSP~krtNzOe3Jz4aGvopi~Ins5PDVtN5cN95oZy~~XLYgv8fton8fINDQgsP6aQF18hdrmk8eUocOwPcMoMZm446wTbf8I~fOJZa1bjxcPhna3WDRo6lbPVkNU_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
                rating={3}/>
                <Product
                id="890890890"
                title ='The Unabridged Journals of Sylvia Plath'
                price={18.00} image="https://m.media-amazon.com/images/P/0385720254.01._SCLZZZZZZZ_SX500_.jpg"
                rating={4}/>
                <Product title ='Secrets of the Flesh: A Life of Colette'
                id="190190190"
                price={24.95} image="https://m.media-amazon.com/images/P/0345371038.01._SCLZZZZZZZ_SX500_.jpg"
                rating={4}/>
            </div>


        </div>
    </div>
  );
}

export default Home;
