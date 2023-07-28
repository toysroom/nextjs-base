import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import Gadget from '../../models/Gadget';
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

export const getStaticProps = async() => {
  
  try {
    const { data } = await axios.get<Gadget[]>(API);
    console.log('server', data);
    return {
      props: {
        data
      },
    }
  } catch (err) {
    return {
      notFound: true
    }
  }
}

// interface CatalogIndexProps {
//   data: Gadget[]
// }

const CatalogIndex = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

// const CatalogIndex: React.FC<CatalogIndexProps> = ({ data }) => {

// const CatalogIndex = (props: any) => {
  console.log('client', data);
  
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>

      <h1 className="title">Catalog</h1>

      <div className="flex">
        {
          data.map( (item: Gadget) => {
            return (
              // <div key={item.id}>
              //   <Image src={item.image} alt={item.title} width={300} height={300}/>
              //   { item.title }
              // </div>
              <Link key={item.id} href={`/catalog/${item.id}`}>
                <Image src={item.image} alt={item.title} width={300} height={300} priority />
                { item.title }
              </Link>
            )
          })
        }
      </div>

    </>
  )
}

export default CatalogIndex;
