import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Flex justify="between" py="2" px="4">
      <Flex>
        <Link href="/">
          <Image src="nike-logo.svg" alt="nikelogo" width={50} height={50} />
        </Link>
      </Flex>
      <Flex gap="6" mt="1" pt="2">
        <Link href="">Home</Link>
        <Link href="">Products</Link>
        <Link href="">Features</Link>
        <Link href="">About Us</Link>
      </Flex>
      <Flex pr="3" mt="2">
        <div className="indicator">
          <span className="indicator-item badge ">9</span>
          <Image src="/cart.svg" alt="cart" width={40} height={20} />
        </div>
      </Flex>
    </Flex>
  );
};

export default Navbar;
