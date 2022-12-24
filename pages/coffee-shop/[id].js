import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeShop = () => {
  const router = useRouter();
  return (
    <div>
      <h2>CoffeeShop</h2>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default CoffeeShop;
