import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import coffeeShopsData from "../../data/coffee-shops.json";

export async function getStaticProps({ params }) {
  console.log({ params });

  return {
    props: {
      coffeeShops: coffeeShopsData.find(
        (store) => store.id.toString() === params.id
      ),
    },
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { id: "0" } }, { params: { id: "1" } }];
  return {
    paths,
    fallback: true,
  };
}

const CoffeeShop = (props) => {
  // const router = useRouter();
  const pageTitle = `Coffee Meister | ${props.coffeeShops.name}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>CoffeeShop</h2>
        <Link href="/">Back to Home</Link>
        <div>{props.coffeeShops.address}</div>
        <div>{props.coffeeShops.name}</div>
      </div>
    </>
  );
};

export default CoffeeShop;
