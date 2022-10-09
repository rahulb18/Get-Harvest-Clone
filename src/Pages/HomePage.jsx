import {
  Container,
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import NavbarMain from "../Components/NavbarMain";

const HomePage = () => {
  const activeStyle = {
    color: "white",
    textDecoration: "none",
    backgroundColor: "#fa5d00",
  };
  const style = {
    color: "white",
    backgroundColor: "#fa5d00",
  };
  return (
    <>
      <NavbarMain />
      <Container bgColor="#fff8f1" maxW="100%" padding="2% 1% 2% 5%">
        {/* --------------------------Hero section--------------------- */}
        <Box>
          <Flex
            justify="space-between"
            direction={{
              base: "row",
              lg: "row",
              md: "column",
              sm: "column",
            }}
          >
            <Box w="49%" padding="0% 2% 1% 0%" textAlign="left">
              <Box>
                <Box w="80%">
                  <Flex gap="1rem">
                    <Box>
                      <img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1651731006/Harvest/1001-Harvest-Home-SPZ-Hero/Rate_stars.svg"
                        alt="Review Stars"
                        class="review-img"
                      ></img>
                    </Box>
                    <Flex w="40%" gap="2%">
                      <Box fontSize="18px">
                        <b>4.6</b>
                      </Box>
                      <Box color="#777571" fontSize="18px">
                        (491 reviews)
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
              <br />
              <br />
              <Box w="110%">
                <Heading
                  fontWeight="simple"
                  size="3xl"
                  color="#1d1e1c"
                  textAlign="left"
                  fontFamily="Georgia, MuotoWeb,sans-serif, Monarch"
                >
                  Finally, time tracking your team actually wants to use
                </Heading>
              </Box>

              <br />
              <Flex direction="column" gap="1.5rem">
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Time Tracking.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Easy & intuitive time tracking that captures all your
                        time without changing the way you work.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Reports & Analysis.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Instantly create reports across projects. Budgets, time,
                        team capacity, cost breakdowns, and more.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Invoicing & Payments.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Turn tracked time into invoices. Accept online payments.
                        Sync with QuickBooks and Xero.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <NavLink to="/signup">
                    <Button
                      bgColor="#fa5d00"
                      color="white"
                      padding="7%"
                      borderRadius="15px"
                      fontSize="20px"
                      _hover={{ bg: "#fa5d00" }}
                    >
                      Get started
                    </Button>
                  </NavLink>
                  <br />
                  <br />
                  <Text fontSize="18px" color="#777571">
                    Free 30-day trial. No credit card required.
                  </Text>
                </Box>
                <Box></Box>
              </Flex>
            </Box>

            <Box w="75%" marginRight="-1%" height="650px" paddingTop="5%">
              <img
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png"
                alt="laptop"
              />
            </Box>
          </Flex>
        </Box>
        <br />
        <br />
        {/* ----------------------------Section 2---------------------------- */}
        <Box>
          <Flex textAlign="left">
            <Box w="36%">
              <Text fontSize="22px">
                <span
                  style={{
                    color: "#fa5d00",
                    fontSize: "22px",
                    fontWeight: "medium",
                  }}
                >
                  70,000+
                </span>{" "}
                companies track time with Harvest
              </Text>
            </Box>
            <Box w="80%">
              <Divider
                w="100%"
                borderColor="#fa5d00"
                h={20}
                marginTop="-6.5%"
              />
            </Box>
          </Flex>
          <Flex gap="5rem" p="5%">
            <Box>
              <img
                alt="icon1"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon2"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon3"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon4"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon5"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon6"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon7"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon8"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize
"
              />
            </Box>
          </Flex>
          <Divider w="100%" borderColor="#fa5d00" h={5} />
        </Box>

        {/* -----------------------------Section 3 - Features------------------------- */}
        <Box padding="5% 3% 0% 3%">
          <Box
            fontSize="22px"
            textAlign="left"
            fontWeight="bold"
            color="#fa5d00"
          >
            FEATURES
          </Box>

          <Box>
            <Heading
              pt={5}
              fontWeight="light"
              size="2xl"
              color="#1d1e1c"
              textAlign="left"
              fontFamily="MuotoWeb,sans-serif, Monarch"
            >
              Everything you need to keep your team ticking
            </Heading>
          </Box>
          <br />
          <Box
            fontFamily="MuotoWeb,sans-serif, Monarch"
            fontSize="30px"
            color="#1d1e1c"
            textAlign="left"
          >
            Time tracking software that helps you keep time and get insights.
          </Box>
          <Flex
            justifyContent="space-between"
            paddingTop="5%"
            direction={{ base: "row", md: "column", sm: "column", lg: "row" }}
          >
            <Box w="40%" textAlign="left">
              <Flex direction="column" gap="3rem">
                <Box
                  border="2px solid #fa5d00"
                  w="95%"
                  p={6}
                  h={40}
                  borderRadius="30px"
                  _hover={{
                    color: "#fa5d00",
                    bgColor: "#fff0e5",
                    cursor: "pointer",
                  }}
                >
                  <Flex gap="1rem" padding="1%">
                    <Box>
                      <img
                        width="80"
                        src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg"
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Flex direction="column">
                        <Box>
                          <Heading size="lg" fontWeight="medium">
                            Time tracking
                          </Heading>
                        </Box>
                        <Box>
                          <Text
                            fontFamily="MuotoWeb,sans-serif, Monarch"
                            fontSize={{
                              base: "18px",
                              md: "12px",
                              sm: "6px",
                              xs: "5px",
                            }}
                            color="#1d1e1c"
                            textAlign="left"
                            _hover={{
                              color: "#fa5d00",
                            }}
                          >
                            Simple and intuitive time tracking your team will
                            love.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box
                  border="2px solid #fa5d00"
                  w="95%"
                  p={6}
                  h={40}
                  borderRadius="30px"
                  _hover={{
                    color: "#fa5d00",
                    bgColor: "#fff0e5",
                    cursor: "pointer",
                  }}
                >
                  <Flex gap="1rem" padding="1%">
                    <Box>
                      <img
                        class="nav-icon"
                        width="80"
                        src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg"
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Flex direction="column">
                        <Box>
                          <Heading size="lg" fontWeight="medium">
                            Reports & analysis
                          </Heading>
                        </Box>
                        <Box>
                          <Text
                            fontFamily="MuotoWeb,sans-serif, Monarch"
                            fontSize={{
                              base: "18px",
                              md: "12px",
                              sm: "6px",
                              xs: "5px",
                            }}
                            color="#1d1e1c"
                            textAlign="left"
                            _hover={{
                              color: "#fa5d00",
                            }}
                          >
                            Unlock the insights that help your business thrive.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box
                  border="2px solid #fa5d00"
                  w="95%"
                  p={6}
                  h={40}
                  borderRadius="30px"
                  _hover={{
                    color: "#fa5d00",
                    bgColor: "#fff0e5",
                    cursor: "pointer",
                  }}
                >
                  <Flex gap="1rem" padding="1%">
                    <Box>
                      <img
                        class="nav-icon"
                        width="80"
                        src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg"
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Flex direction="column">
                        <Box>
                          <Heading size="lg" fontWeight="medium">
                            Invoicing & payments
                          </Heading>
                        </Box>
                        <Box>
                          <Text
                            fontFamily="MuotoWeb,sans-serif, Monarch"
                            fontSize={{
                              base: "18px",
                              md: "12px",
                              sm: "6px",
                              xs: "5px",
                            }}
                            color="#1d1e1c"
                            textAlign="left"
                            _hover={{
                              color: "#fa5d00",
                            }}
                          >
                            Seamless invoicing and fast online payments.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box w="65%" paddingTop="3%">
              <img
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png"
                alt="laptop"
              />
            </Box>
          </Flex>
          <Box textAlign="left" paddingTop="5%" paddingBottom="8%">
            <NavLink to="/features">
              <Button
                bgColor="#1d1e1c"
                color="white"
                padding="2%"
                borderRadius="15px"
                fontSize="22px"
                _hover={{ bg: "#1c2938" }}
              >
                Discover all features
              </Button>
            </NavLink>
          </Box>
          <Divider w="100%" borderColor="#fa5d00" h={5} />
        </Box>

        {/* ---------------------Section 4- Integration---------------------- */}
        <Box>
          <Box padding="4% 2%">
            <Flex
              direction={{ base: "row", md: "column", sm: "column", lg: "row" }}
            >
              <Box w="45%" paddingTop="2%">
                <img
                  width="100%"
                  alt="snapping fingers"
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg"
                />
              </Box>
              <Box
                w="55%"
                p={10}
                h={470}
                bgImage="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/auras/aura-center-top.png"
                bgRepeat="no-repeat"
                bgSize="100%"
                marginTop="-4.2%"
              >
                <Box paddingTop="4%" w="100%">
                  <Flex direction="column">
                    <Box
                      fontSize="22px"
                      textAlign="left"
                      fontWeight="bold"
                      color="#fa5d00"
                      paddingTop="7%"
                    >
                      INTEGRATIONS
                    </Box>

                    <Box>
                      <Heading
                        pt={5}
                        fontWeight="light"
                        size={{ base: "2xl", md: "2xl", sm: "lg" }}
                        color="#1d1e1c"
                        textAlign="left"
                        fontFamily="MuotoWeb,sans-serif, Monarch"
                      >
                        Integrated with the tools your team already knows and
                        loves
                      </Heading>
                    </Box>
                    <br />
                    <Box
                      fontFamily="MuotoWeb,sans-serif, Monarch"
                      fontSize={{
                        base: "30px",
                        md: "20px",
                        sm: "16px",
                        xs: "10px",
                      }}
                      color="#1d1e1c"
                      textAlign="left"
                    >
                      Your favorite apps work seamlessly with Harvest so you can
                      keep projects on track however you work.
                    </Box>
                  </Flex>
                  <Box textAlign="left" paddingTop="5%" paddingBottom="8%">
                    <NavLink to="/integration">
                      <Button
                        bgColor="#1d1e1c"
                        color="white"
                        padding="5%"
                        borderRadius="15px"
                        fontSize="22px"
                        _hover={{ bg: "#1c2938" }}
                      >
                        Browse integrations
                      </Button>
                    </NavLink>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Divider w="100%" borderColor="#fa5d00" h={5} />
        </Box>

        {/* ------------------------Section 5- Customer Stories----------------------- */}
        <Box padding="3% 0% 0% 0%">
          <Flex
            gap="4%"
            direction={{ base: "row", md: "column", sm: "column", lg: "row" }}
          >
            <Box>
              <Divider
                orientation="vertical"
                borderColor="#fa5d00"
                height="390px"
              />
            </Box>
            <Box
              w="50%"
              h={400}
              bgImage="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/auras/aura-vertical-small.jpg"
              bgRepeat="no-repeat"
              bgSize="100%"
            >
              <Heading
                fontWeight="simple"
                size={{ base: "xl", md: "lg", sm: "sm" }}
                color="#1d1e1c"
                textAlign="left"
              >
                <br />
                <Box>
                  <img
                    alt="quote"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/quote-open.svg"
                  />
                </Box>

                <Box marginTop="-4%" marginLeft="5%">
                  We really focus on work-life balance in remote work… Time
                  tracking reveals if somebody is overburdened and that becomes
                  an immediate conversation.
                </Box>
                {/* <Box marginTop="-6%" marginLeft="40%">
                  <img
                    alt="quote"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/quote-open.svg"
                  />
                </Box> */}
              </Heading>
              <br />
              <br />
              <br />
              <Box>
                <Text fontSize="20px" textAlign="left" marginLeft="5%">
                  <b> Noah Gedrich, Zehner</b>
                </Text>
              </Box>

              {/* Toggling images
             <Box></Box> */}
            </Box>
            <Divider
              orientation="vertical"
              borderColor="#fa5d00"
              height="370px"
            />
            <Box w="45%">
              <img
                src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=560&amp;height=374&amp;name=home-photo-zehner.jpg"
                width="560"
                height="370"
                alt="Zehner"
                title="Zehner"
                srcset="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=280&amp;height=187&amp;name=home-photo-zehner.jpg 280w, https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=560&amp;height=374&amp;name=home-photo-zehner.jpg 560w, https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=840&amp;height=561&amp;name=home-photo-zehner.jpg 840w, https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=1120&amp;height=748&amp;name=home-photo-zehner.jpg 1120w, https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=1400&amp;height=935&amp;name=home-photo-zehner.jpg 1400w, https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=1680&amp;height=1122&amp;name=home-photo-zehner.jpg 1680w"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </Box>
            <Divider
              orientation="vertical"
              borderColor="#fa5d00"
              height="370px"
            />
          </Flex>
          <Box textAlign="left" paddingTop="5%" paddingBottom="8%">
            <NavLink to="/customers">
              <Button
                bgColor="#1d1e1c"
                color="white"
                padding="2%"
                borderRadius="15px"
                fontSize="22px"
                _hover={{ bg: "#1c2938" }}
              >
                Meet our customers
              </Button>
            </NavLink>
          </Box>

          <Divider w="100%" borderColor="#fa5d00" h={2} />
        </Box>

        {/* --------------------------Section 6- Learning Resources------------------------- */}
        <Box
          paddingTop="5%"
          bgImage="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/auras/aura-bottom-blur.jpg"
          bgRepeat="no-repeat"
          bgSize="150%"
          width="100%"
        >
          <Box>
            <Flex
              direction={{ base: "row", md: "column", sm: "column", lg: "row" }}
            >
              <Box w="45%" padding="5%">
                <Box
                  fontSize="22px"
                  textAlign="left"
                  fontWeight="bold"
                  color="#fa5d00"
                  paddingTop="7%"
                >
                  LEARNING RESOURCES
                </Box>
                <Box>
                  <Heading
                    pt={5}
                    fontWeight="light"
                    size="2xl"
                    color="#1d1e1c"
                    textAlign="left"
                    fontFamily="MuotoWeb,sans-serif, Monarch"
                  >
                    Supporting your team along the way
                  </Heading>
                </Box>
              </Box>

              <Box w="55%" paddingLeft="3%">
                <Divider w="90%" borderColor="#fa5d00" h={8} />
                <Box
                  padding="4% 0%"
                  _hover={{
                    color: "#fa5d00",
                    bgColor: "#fff0e5",
                    cursor: "pointer",
                    width: "90%",
                  }}
                >
                  <Flex gap="2rem">
                    <Box marginLeft="4%">
                      <img
                        height="75"
                        src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg"
                        alt=""
                      />
                    </Box>
                    <Box w="60%" textAlign="left">
                      <Flex direction="column">
                        <Box>
                          <Heading size="lg" fontWeight="medium">
                            Guides and templates
                          </Heading>
                        </Box>
                        <Box>
                          <Text>
                            Learn how to introduce your team to time tracking
                            and make the most of Harvest.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <ArrowForwardIcon color="#fa5d00" fontSize="200%" />
                    </Box>
                  </Flex>
                </Box>
                <Divider w="90%" borderColor="#fa5d00" />
                <Box
                  padding="4% 0%"
                  _hover={{
                    color: "#fa5d00",
                    bgColor: "#fff0e5",
                    cursor: "pointer",
                    width: "90%",
                  }}
                >
                  <Flex gap="2rem">
                    <Box marginLeft="4%">
                      <img
                        height="75"
                        src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg"
                        alt=""
                      />
                    </Box>
                    <Box w="60%" textAlign="left">
                      <Flex direction="column">
                        <Box>
                          <Heading size="lg" fontWeight="medium">
                            Webinars
                          </Heading>
                        </Box>
                        <Box>
                          <Text>
                            Watch a quick intro to Harvest or sign up for a live
                            session with one of our Experts.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <ArrowForwardIcon color="#fa5d00" fontSize="200%" />
                    </Box>
                  </Flex>
                </Box>
                <Divider w="90%" borderColor="#fa5d00" />
                <Box
                  padding="4% 0%"
                  _hover={{
                    color: "#fa5d00",
                    bgColor: "#fff0e5",
                    cursor: "pointer",
                    width: "90%",
                  }}
                >
                  <Flex gap="2rem">
                    <Box marginLeft="4%">
                      <img
                        height="75"
                        src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg"
                        alt=""
                      />
                    </Box>
                    <Box w="60%" textAlign="left">
                      <Flex direction="column">
                        <Box>
                          <Heading size="lg" fontWeight="medium">
                            Help Center
                          </Heading>
                        </Box>
                        <Box>
                          <Text>
                            Find the answers to al your questions or get in
                            touch with one of our friendly Experts.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <ArrowForwardIcon color="#fa5d00" fontSize="200%" />
                    </Box>
                  </Flex>
                </Box>
                <br />
                <br />
              </Box>
            </Flex>
            <br />
            <Divider w="100%" borderColor="#fa5d00" />
          </Box>
        </Box>

        {/* -----------------------------Last section-------------------------- */}
        <Box padding="5% 0%">
          <Flex gap="4rem">
            <Box w="55%" textAlign="left">
              <Heading
                fontWeight="simple"
                size="2xl"
                color="#1d1e1c"
                textAlign="left"
              >
                Start tracking time today
              </Heading>
              <br />
              <Text fontSize="20px">
                Join 70,000+ companies spending their time wisely with harvest
              </Text>
              <br />
              <br />
              <Flex gap="2.5rem">
                <Box>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : style)}
                    to="/signup"
                  >
                    <Button
                      bgColor="#fa5d00"
                      color="white"
                      padding="7%"
                      borderRadius="15px"
                      fontSize="20px"
                      _hover={{ bg: "#fa5d00" }}
                    >
                      Try Harvest for free
                    </Button>
                  </NavLink>
                </Box>
                <Box>
                  <Text fontSize="20px" color="#777571">
                    Free 30-day trial. No credit card required.
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box w="40%">
              <img
                alt="compimg"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"
              />
            </Box>
          </Flex>
        </Box>
        <br />
        <br />
      </Container>

      {/* --------------------------------Footer------------------------------- */}
      <Footer />
    </>
  );
};

export default HomePage;
