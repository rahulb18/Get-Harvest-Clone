import React from "react";
import { Heading } from "@chakra-ui/react";
import NavbarInside from "../../Components/NavbarInside";
import FooterInside from "../../Components/FooterInside";

const Home = () => {
  return (
    <div>
      <NavbarInside />
      <Heading>Home</Heading>
      <FooterInside />
    </div>
  );
};

export default Home;
