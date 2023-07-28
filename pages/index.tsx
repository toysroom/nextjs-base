import type { NextPage } from 'next'
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import image from '/public/images/large.png';

const css: React.CSSProperties = { position: 'relative', height: '300px', maxWidth: '1024px', border: '1px dashed grey', margin: '10px auto', textAlign: 'center', padding: 10 };
// const css: React.CSSProperties = { maxWidth: '1024px', border: '1px dashed grey', margin: '10px auto', textAlign: 'center', padding: 10 };

const Home: NextPage = () => {

  function onloadComplete() {
    alert('loaded')
  }

  return (
    <>
      <Head>
        <title>Front End Gadgets - Home</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>
      <div style={css}>
        {/* <img src="/images/large.png" alt="" /> */}
        {/* <Image src={image} alt="React logo"/> */}
        {/* <Image src="/images/large.png" alt="React Keychains" width={600} height={600} /> */}
        {/* <Image src="/images/large.png" alt="React Keychains" width={600} height={600} layout="intrinsic"/> */}
        {/* <Image src="/images/large.png" alt="React Keychains" width={600} height={600} layout="responsive"/> */}
        {/* <Image src="/images/large.png" alt="React Keychains" width={600} height={600} layout="fixed"/> */}
        {/* <Image 
          src="/images/large.png" alt="React Keychains" width={600} height={600} 
          layout="fixed"
          objectFit="cover"
        /> */}
      {/* <Image 
        src={image}
        width={600} height={600} 
        alt="Balloon" 
        placeholder="blur"
      /> */}
      {/* <Image 
        src={image}
        width={600} height={600} 
        alt="Balloon" 
        placeholder="blur"
        quality={75}
      />*/}
      <Image
        src={image}
        width={600} height={474}
        alt="Baloon"
        placeholder="blur"
        quality={75}
        onLoadingComplete={onloadComplete}
      /> 

      </div>

      <h1 className="title">FrontEnd Gadgets</h1>
      <button className="transition-all duration-500	border border-pink-500 bg-white rounded-lg rounded-circle p-2 hover:bg-pink-50">VIEW CATALOG</button>
    </>
  )
}

export default Home
