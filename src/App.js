import React, { useEffect } from 'react'
import { FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import Nav from './Nav';
import WebFont from 'webfontloader';
import './App.css';
import nfts from './nfts.json'
import Fade from 'react-reveal/Fade';
import Reveal from './Reveal'



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Quicksand', 'Lato']
      }
    });
  }, []);


  let roadmap = [
    {
      step: "01",
      title: "A series of TunnelNecks Launch!",
      text: " Identify what your version of TunnelNeck will look like! A series of collections from EsoVerse have started to launch starting with - Frocode. Frocodes can be minted and are being revealed to the real world. However, in Esoverse, there exist countless number of esoteric necks to interact, become, play and submerge yourself in! A universe where your if's and but's can turn into Ahaa's! Come join the esoverse community to embrace your wierd within."
    },
    {
      step: "02",
      title: "Prior access to Tunnel Necks",
      text: "Do you want priority access to the TunnelNecks by following some simple steps? Join our Discord community to gain exclusive access to Esoverse. You will also get an opportunity to enter in the TunnelNeck Whitelist."
    },
    {
      step: "03",
      title: "Airdropping TunnelNecks",
      text: "Rare cards of EsoVerse will be distributed for the first 100 members to join our community! "
    },
    {
      step: "04",
      title: "Mint TunnelNecks",
      text: "Surprise drop in April 2022. You get to decide, what you want on your version of TunnelNeck. Additionally, it doubles as an exclusive access membership card for soon-to-be-lauched EsoVerse!"
    },
    {
      step: "05",
      title: "Embrace your esoteric",
      text: "A first look at what esoverse will look like"
    },
  ]

  return (

    <div className="App">
      {/* https://source.unsplash.com/random */}
      <div className="bg-gradient-to-r from-red-200 via-red-300 to-red-200">
        <div className="containerr px-10 flex mx-auto w-full py-5">
          {/* eslint-disable-next-line */}
          <a name="Top" />
          <div className="ml-auto flex flex-nowrap">
            <a href="http://twitter.com/esoverse"><FaTwitter className="ml-3 mt-3" size={40} /></a>
            <a href="https://www.facebook.com/esoverse.esoteric"><FaFacebook className="ml-3 mt-3" size={40} /></a>
            <a href="https://discord.gg/5JcTCKUZ"><FaDiscord className="ml-3 mt-3" size={40} /></a>
          </div>
        </div>
      </div>

      <div className="bg-hero bg-cover">
        <div className="bg-opacity-80 bg-orange-300 pb-10">
          {/* eslint-disable-next-line */}
          <a name="Content" />
          <div className="containerr px-10 mx-auto w-full">
            <Nav />
            <div className="w-1/2 text-left select-none font-quicksand text-7xl text-red-500"> Entrée Esoverse </div>
            <div className="w-1/2 text-left select-none font-lato text-2xl mt-5 text-black">Mint your own tunnel necks!<br /><br />
              <a href="#Mint" className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-50 bg-red-500 rounded ml-3">Mint Now!</a>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-booyah bg-cover font-lato text-white">
        <div className="bg-opacity-100 bg-lightcoral-800 py-10">
          {/* eslint-disable-next-line */}
          <a name="Team" />
          <Reveal type={<Fade left />} className="container mx-10 mx-auto w-full">
            <div className="text-white text-5xl">OG Tunnel Necks</div>
            <div className="flex justify-center flex-row m-auto text-white font-black-900 text-lg">
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-slate-50 rounded max-w-full h-auto align-middle" src={nfts[1].image} />
                <p>TunnelNeck</p>
                <p>Pappa</p>

              </div>
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-slate-50 rounded max-w-full h-auto align-middle" src={nfts[2].image} />
                <p>TunnelNeck</p>
                <p>Mamma</p>
              </div>
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-slate-50 rounded max-w-full h-auto align-middle" src={nfts[3].image} />
                <p>TunnelNeck</p>
                <p>AbhiSana</p>
              </div>
            </div>
          </Reveal>


        </div>
      </div>
      {/* Roadmap */}
      <div className="bg-red-100 text-white">
        <div className="containerr mx-10 mx-auto w-full pt-2 pb-5">
          {/* eslint-disable-next-line */}
          <a name="Roadmap" />
          {roadmap.map(goal => <Reveal key={goal.step} className="bg-red-500 pt-10 flex">
            <div className="bg-red-500 z-0 w-5/6 m-auto rounded-lg mt-5 text-white">
              <div className="mx-5 p-5 pb-0 flex">
                <div className="text-2xl mr-3 text-rose-50 text-bold text-mono">{goal.step}</div> <div className="text-2xl text-bold text-mono">{goal.title}</div><br />
              </div>
              <div className="mx-5 p-5 flex">
                <div className="text-lg text-bold text-mono text-left">{goal.text}</div>
              </div>
            </div>
          </Reveal>)}
        </div>
      </div>
      
    


      {/* Tokens */}
      <div className="bg-booyah bg-cover">
        <div className="bg-opacity-100 bg-purple-900">
          {/* eslint-disable-next-line */}
          <a name="Tokens" />
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(0, 5).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-slate-50 rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(5, 10).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-slate-50 rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(10, 15).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-slate-50 rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
        </div>
      </div>


      {/* <div className="h-72 bg-white">
        <Reveal from={{ x: -1800 }} to={{ x: 0 }}>
          <div> fade </div>
        </Reveal>
      </div> */}

    </div>


  );
}

export default App;

