import { Heading } from "@chakra-ui/react";
import React from "react";
import FooterInside from "../../Components/FooterInside";
import NavbarInside from "../../Components/NavbarInside";

const Expenses = () => {
  return (
    <div>
      <NavbarInside />
      <Heading> Expenses</Heading>
      <FooterInside />
    </div>
  );
};

export default Expenses;
