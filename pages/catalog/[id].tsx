import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { GetServerSidePropsContext, GetStaticPropsContext, NextPage } from 'next';
import Gadget from '../../models/Gadget';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: false
    // fallback: true
    // fallback: 'blocking'
  };
}

// export async function getStaticPaths() {
//   try {
//     const res = await axios.get<Gadget[]>(API);
//     const paths = res.data.map(gadget => ({ params: { id: gadget.id.toString() } }))
//     console.log(paths);
//     return {
//       paths,
//       fallback: false
//     }
//   } catch(err) {
//     return {
//       notFound: true
//     }
//   }
// }

export const getStaticProps = async(context: GetStaticPropsContext) => {
  const id = context.params?.id;
  try {
    const { data } = await axios.get<Gadget>(`${API}/${id}`)
    return {
      props: {
        data
      }
    }
  } catch(err) {
    return {
      notFound: true
    }
  }
}

interface CatalogDetailsProps {
  data: Gadget
}

const CatalogDetails: NextPage<CatalogDetailsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog Product</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>
      <h1 className="title">{data.title}</h1>
      <Image src={data.image} alt={data.title} width={300} height={300} priority />

      <Link href="/catalog" className="text-pink-500 mt-3">Back</Link>
    </>

  )
}

export default CatalogDetails;