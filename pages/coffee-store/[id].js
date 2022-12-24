import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      <h2>CoffeeStore</h2>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default CoffeeStore;
