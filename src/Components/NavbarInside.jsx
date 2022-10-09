import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const NavbarInside = () => {
  const activeStyle = {
    fontSize: "20px",
    backgroundColor: "#fb7d33",
    fontWeight: "bold",
  };
  const style = {
    color: "white",
    padding: "1%",
    textDecoration: "none",
    fontSize: "20px",
  };
  return (
    <>
      <Box>
        <Flex
          justifyContent="space-between"
          bg="#fa5d00"
          color="white"
          padding="0% 3%"
        >
          <Box w="80%">
            <Flex padding="1%" color="white" w="100%">
              <Box w="3%">
                <NavLink to="/home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-house-door"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                  </svg>
                </NavLink>
              </Box>
              <Box w="12%">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to="/time"
                >
                  Time
                </NavLink>
              </Box>
              <Box w="12%">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to="/expenses"
                >
                  Expenses
                </NavLink>
              </Box>
              <Box w="12%">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to="/projects"
                >
                  Projects
                </NavLink>
              </Box>
              <Box w="10%">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to="/team"
                >
                  Team
                </NavLink>
              </Box>
              <Box w="10%">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to="/reports"
                >
                  Reports
                </NavLink>
              </Box>
              <Box w="10%">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to="/invoices"
                >
                  Invoices
                </NavLink>
              </Box>
              <Box w="10%">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : style)}
                  to="/manage"
                >
                  Manage
                </NavLink>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex
              gap="1rem"
              padding="1%"
              color="white"
              fontSize="20px"
              marginTop="10px"
            >
              <Box>Settings</Box>
              <Box>User </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NavbarInside;
