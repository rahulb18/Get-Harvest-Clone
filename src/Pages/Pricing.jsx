import {
  Container,
  Heading,
  Button,
  Center,
  Box,
  Flex,
  Divider,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { Switch } from "antd";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import NavbarMain from "../Components/NavbarMain";
import { useState } from "react";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);

  const togglePricingOptions = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

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
      <Container bgColor="#fff8f1" maxW="100%" h="auto" p="5% 6% 5% 6%">
        <br />
        <Box>
          <Heading
            fontWeight="simple"
            size="3xl"
            color="#1d1e1c"
            textAlign="left"
          >
            Simple, flexible pricing
          </Heading>
        </Box>
        <br />
        <Box>
          <Heading
            fontWeight="light"
            size="lg"
            color="#1d1e1c"
            textAlign="left"
          >
            Every plan includes every feature, and can scale as your team does.
          </Heading>
        </Box>
        <br />
        <br />

        {/* -----------------Toggle section----------------- */}
        <Box>
          <Flex gap="1rem">
            <Box>Pay monthly</Box>
            <Box>
              <Switch onClick={togglePricingOptions} />
            </Box>
            <Box> Pay yearly (Save 10%)</Box>
          </Flex>
        </Box>
        <br />
        <Flex gap="2.5rem">
          {/* left column */}
          <Box
            border="2px solid #fa5d00"
            w="90vh"
            p={10}
            h={470}
            borderRadius="30px 0px 30px 0"
          >
            <Flex justifyContent="space-between">
              <Box>
                <Flex direction="column" textAlign="left">
                  <Box>
                    <Heading fontWeight="medium" size="2xl" color="#fa5d00">
                      Free
                    </Heading>
                  </Box>
                  <br />
                  <Box fontSize="20px">1 seat</Box>
                  <Box fontSize="20px"> 2 projects</Box>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Flex>
                    <Box fontSize="20px">
                      <b> $</b>
                    </Box>
                    <Box>
                      <Heading fontWeight="simple" size="3xl" color="#1d1e1c">
                        0
                      </Heading>
                    </Box>
                  </Flex>
                  <Box>
                    <Heading fontWeight="simple" size="md" color="#1d1e1c">
                      forever
                    </Heading>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <br />
            <br />
            <Box>
              <Button
                colorScheme="gray"
                variant="outline"
                w="100%"
                bg="white"
                p={5}
                border="2px solid red"
                borderRadius="10px"
              >
                <Flex direction="row">
                  <Box width="20%" marginTop="1%">
                    <img
                      src="https://www.freepnglogos.com/uploads/new-google-logo-transparent--14.png"
                      alt="google logo"
                      width="70%"
                    />
                  </Box>
                  <Box margin="3% 25% 2% 20%">
                    <Heading as="h5" size="md">
                      Sign up with Google
                    </Heading>
                  </Box>
                </Flex>
              </Button>
            </Box>
            <br />
            <br />
            <Flex>
              <Divider w="48%" color="gray" />
              <Center marginTop="-2.5%">or </Center>
              <Divider w="48%" />
            </Flex>
            <br />
            <Box>
              <NavLink to="/signup">
                <Button
                  bg="#2e8a45"
                  color="white"
                  w="100%"
                  p={5}
                  borderRadius="10px"
                  fontSize="18px"
                  _hover={{ color: "#188433", bgColor: "#edf2f7" }}
                >
                  Sign up with email
                </Button>
              </NavLink>
            </Box>
            <br />
            <Text fontSize="18px" color="#777571">
              30-day free trial. No credit card required.
            </Text>
          </Box>
          {/* right column */}
          <Box
            border="2px solid #fa5d00"
            w="90vh"
            p={10}
            h={470}
            borderRadius="30px 0px 30px 0"
            bgImage="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/auras/aura-center-top.png"
            bgRepeat="no-repeat"
            bgSize="100%"
          >
            <Flex justifyContent="space-between">
              <Box>
                <Flex direction="column" textAlign="left">
                  <Box>
                    <Heading fontWeight="medium" size="2xl" color="#fa5d00">
                      Pro
                    </Heading>
                  </Box>
                  <br />
                  <Box fontSize="20px">Unlimited seats</Box>
                  <Box fontSize="20px">Unlimited projects</Box>
                </Flex>
              </Box>
              {toggle ? (
                <Box>
                  <Flex direction="column">
                    <Flex>
                      <Box fontSize="20px" marginLeft="18%">
                        <b> $</b>
                      </Box>

                      <Box>
                        <Heading fontWeight="simple" size="3xl" color="#1d1e1c">
                          10.80
                        </Heading>
                      </Box>
                    </Flex>
                    <Box>
                      <Heading fontWeight="simple" size="md" color="#1d1e1c">
                        per seat, per month, billed yearly
                      </Heading>
                    </Box>
                  </Flex>
                </Box>
              ) : (
                <Box>
                  <Flex direction="column">
                    <Flex>
                      <Box fontSize="20px" marginLeft="18%">
                        <b> $</b>
                      </Box>

                      <Box>
                        <Heading fontWeight="simple" size="3xl" color="#1d1e1c">
                          12
                        </Heading>
                      </Box>
                    </Flex>
                    <Box>
                      <Heading fontWeight="simple" size="md" color="#1d1e1c">
                        per seat per month
                      </Heading>
                    </Box>
                  </Flex>
                </Box>
              )}
            </Flex>
            <br />
            <br />
            <Box>
              <Button
                colorScheme="gray"
                variant="outline"
                w="100%"
                bg="white"
                p={5}
                border="2px solid red"
                borderRadius="10px"
              >
                <Flex direction="row">
                  <Box width="20%" marginTop="1%">
                    <img
                      src="https://www.freepnglogos.com/uploads/new-google-logo-transparent--14.png"
                      alt="google logo"
                      width="70%"
                    />
                  </Box>
                  <Box margin="3% 25% 2% 20%">
                    <Heading as="h5" size="md">
                      Sign up with Google
                    </Heading>
                  </Box>
                </Flex>
              </Button>
            </Box>
            <br />
            <br />
            <Flex>
              <Divider w="48%" color="gray" />
              <Center marginTop="-2.5%">or </Center>
              <Divider w="48%" />
            </Flex>
            <br />
            <Box>
              <NavLink to="/signup">
                <Button
                  bg="#2e8a45"
                  color="white"
                  w="100%"
                  p={5}
                  borderRadius="10px"
                  fontSize="18px"
                  _hover={{ color: "#188433", bgColor: "#edf2f7" }}
                >
                  Sign up with email
                </Button>
              </NavLink>
            </Box>
            <br />
            <Text fontSize="18px" color="#777571">
              30-day free trial. No credit card required.
            </Text>
          </Box>
        </Flex>
        <Divider w="100%" borderColor="#fa5d00" h={20} />

        {/* ------------------------Checklist section---------------------------- */}
        <Flex
          padding="6% 8% 6% 5%"
          gap="10rem"
          bgImage="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/auras/aura-thread-bottom-right.jpg"
          bgRepeat="no-repeat"
          bgSize="100%"
          maxW="100%"
        >
          <Box w="45%">
            <Heading
              fontWeight="simple"
              size="2xl"
              color="#1d1e1c"
              textAlign="left"
              colorScheme="#1d1e1c"
              pt="2rem"
              pb="1rem"
            >
              Every feature your team needs
            </Heading>
          </Box>
          <Box w="50%">
            <Flex direction="column">
              <Flex gap="20px">
                <Box>
                  <img
                    alt="tick"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/icon-checklist.svg"
                  />
                </Box>
                <Box fontSize="20px"> Easy time and expense tracking</Box>
              </Flex>
              <Flex gap="20px">
                <Box>
                  <img
                    alt="tick"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/icon-checklist.svg"
                  />
                </Box>
                <Box fontSize="20px"> Apps for all your devices</Box>
              </Flex>
              <Flex gap="20px">
                <Box>
                  <img
                    alt="tick"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/icon-checklist.svg"
                  />
                </Box>
                <Box fontSize="20px"> Integrations that fit your workflow </Box>
              </Flex>
              <Flex gap="20px">
                <Box>
                  <img
                    alt="tick"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/icon-checklist.svg"
                  />
                </Box>
                <Box fontSize="20px"> Insights into your projects and team</Box>
              </Flex>
              <Flex gap="20px">
                <Box>
                  <img
                    alt="tick"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/icon-checklist.svg"
                  />
                </Box>
                <Box fontSize="20px"> Seamless invoicing and payments</Box>
              </Flex>
              <Flex gap="20px">
                <Box>
                  <img
                    alt="tick"
                    src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/icon-checklist.svg"
                  />
                </Box>
                <Box fontSize="20px">Support from real humans</Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Divider w="100%" borderColor="#fa5d00" />
        <br />
        <br />
        <Flex gap="2rem">
          <Box borderRadius="30px 0px 30px 0" w="80vh" h={400} bgClip="img">
            <Image
              borderRadius="30px 0px 30px 0"
              width="100%"
              src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=1120&name=home-photo-dovetail.jpg"
              alt="leftimage"
            />
          </Box>
          <Box w="90vh" p={10} h={400}>
            <Heading
              fontWeight="simple"
              size="xl"
              color="#1d1e1c"
              textAlign="left"
            >
              <Box>
                <img
                  alt="quote"
                  src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/icons/quote-open.svg"
                />
              </Box>

              <Box marginTop="-4%" marginLeft="5%">
                We needed something that worked, something super simple, because
                we don’t want to have to teach people how to use it as part of
                onboarding.
              </Box>
              {/* <Box marginTop="-6%" marginLeft="48%">
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
                <b> Nick Frandsen</b>
              </Text>
              <Text fontSize="20px" textAlign="left" marginLeft="5%">
                Co-founder and managing partner, Dovetail
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex gap="5rem" p="7%">
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
        </Flex>

        <Divider w="100%" borderColor="#fa5d00" />

        {/* -------------------FAQ - Accordion Block------------------------ */}
        <Flex
          bgImage="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/auras/aura-spike-bottom-right.jpg"
          bgRepeat="no-repeat"
          bgSize="80%"
          height="82vh"
        >
          <Box w="50%" paddingTop="2%">
            <Heading
              fontWeight="simple"
              size="2xl"
              color="#1d1e1c"
              textAlign="left"
              colorScheme="#1d1e1c"
              pt="2rem"
              pb="1rem"
            >
              Frequently asked questions
            </Heading>
          </Box>
          <Box w="50%" paddingTop="4%">
            <Accordion allowToggle borderColor="#fa5d00">
              <AccordionItem _hover={{ bg: "#fff0e5" }}>
                <h2>
                  <AccordionButton color="#fa5d00" fontSize="30px">
                    <Box
                      flex="1"
                      textAlign="left"
                      color="black"
                      fontSize="27px"
                    >
                      How do I sign up for the free plan?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bgColor="#fff0e5"
                  textAlign="left"
                  fontWeight="medium"
                  padding="1%"
                  fontSize="18px"
                >
                  When your trial account meets{" "}
                  <span style={{ color: "#fa5d00" }}>
                    the free plan’s requirements
                  </span>
                  , you can sign up for the free version during the upgrade
                  process. On the <b> Upgrade Your Harvest Plan </b> page, click
                  the <b>switch to the free version</b> link below the plan
                  options.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem _hover={{ bg: "#fff0e5" }}>
                <h2>
                  <AccordionButton color="#fa5d00" fontSize="30px">
                    <Box
                      flex="1"
                      textAlign="left"
                      color="black"
                      fontSize="27px"
                    >
                      What happens at the end of my trial?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bgColor="#fff0e5"
                  padding="1%"
                  fontSize="18px"
                  textAlign="left"
                >
                  You can upgrade to a paid plan any time during your 30-day
                  trial period. If you haven’t upgraded at the end of 30 days,
                  your trial account will be automatically deactivated. We don’t
                  collect credit card info when you start a trial, so you don’t
                  need to worry about being charged. Even though your trial
                  account will be deactivated, we won’t delete your data. If you
                  ever want to try Harvest again in the future, your data will
                  be waiting for you. If you’re looking to switch to the free
                  plan, you can do that any time during your trial as well.
                  You’ll see that option during the upgrade process as long as
                  your account meets{" "}
                  <span style={{ color: "#fa5d00" }}>
                    the free plan’s requirements
                  </span>
                  .
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem _hover={{ bg: "#fff0e5" }}>
                <h2>
                  <AccordionButton color="#fa5d00" fontSize="30px">
                    <Box
                      flex="1"
                      textAlign="left"
                      color="black"
                      fontSize="27px"
                    >
                      Does my team qualify for any discounts?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bgColor="#fff0e5"
                  padding="1%"
                  fontSize="18px"
                  textAlign="left"
                >
                  Yes! When you{" "}
                  <b> pay for the year up front, you get a 10% discount</b>
                  that’s automatically applied to your account. We also offer{" "}
                  <span style={{ color: "#fa5d00" }}>
                    discounts upon request
                  </span>{" "}
                  to teams of{" "}
                  <b>
                    50+ people, nonprofits, schools and universities, educators
                    using Harvest in a classroom setting
                  </b>
                  , and <b>students</b>.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem _hover={{ bg: "#fff0e5" }}>
                <h2>
                  <AccordionButton color="#fa5d00" fontSize="30px">
                    <Box
                      flex="1"
                      textAlign="left"
                      color="black"
                      fontSize="27px"
                    >
                      How can I get a quote for my team?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bgColor="#fff0e5"
                  padding="1%"
                  fontSize="18px"
                  textAlign="left"
                >
                  Use our handy{" "}
                  <span style={{ color: "#fa5d00" }}>pricing calculator</span>{" "}
                  to see how much your team would pay for Harvest and what
                  discounts could apply.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem _hover={{ bg: "#fff0e5" }}>
                <h2>
                  <AccordionButton color="#fa5d00" fontSize="30px">
                    <Box
                      flex="1"
                      textAlign="left"
                      color="black"
                      fontSize="27px"
                    >
                      What are our payment options?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bgColor="#fff0e5"
                  padding="1%"
                  fontSize="18px"
                  textAlign="left"
                >
                  <p>
                    You can pay for Harvest via credit card either monthly or
                    yearly. If you pay for the year in advance, you’ll get a 10%
                    discount on your bill!
                  </p>
                  <br />
                  <p>
                    If you have 10 or more seats and pay for the year in
                    advance, you can also request an invoice when you upgrade
                    and pay for your subscription via check or bank transfer.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem _hover={{ bg: "#fff0e5" }}>
                <h2>
                  <AccordionButton color="#fa5d00" fontSize="30px">
                    <Box
                      flex="1"
                      textAlign="left"
                      color="black"
                      fontSize="27px"
                    >
                      What happens if my team size changes?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bgColor="#fff0e5"
                  padding="1%"
                  fontSize="18px"
                  textAlign="left"
                >
                  <p>
                    If you’re paying monthly, you can add or remove seats at any
                    time. Your price will be adjusted on your next monthly bill.
                    If you have contractors or interns, or you anticipate the
                    number of seats you’ll need may fluctuate from month to
                    month, the monthly option is a better fit for you.
                  </p>
                  <br />
                  <p>
                    If you paid for the year in advance, you can add seats at
                    any time and will be charged a prorated amount based on the
                    number of days left in your billing cycle. While you can’t
                    remove seats during your current billing cycle, you can
                    indicate inside your account if you’d like your yearly plan
                    to renew with fewer seats. Keep in mind that yearly accounts
                    receive a 10% discount, so if your seat requirements don’t
                    change from month to month, yearly is probably the best
                    option for you.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem _hover={{ bg: "#fff0e5" }}>
                <h2>
                  <AccordionButton color="#fa5d00" fontSize="30px">
                    <Box
                      flex="1"
                      textAlign="left"
                      color="black"
                      fontSize="27px"
                    >
                      Can we switch our billing frequency?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bgColor="#fff0e5"
                  padding="1%"
                  fontSize="18px"
                  textAlign="left"
                >
                  <p>
                    <b>If you’re paying monthly,</b> you can switch to yearly
                    payment at any time (and you’ll receive a 10% discount for
                    doing so!).
                  </p>
                  <br />
                  <p>
                    <b>If you paid for the year in advance,</b> you can switch
                    to monthly payment at the end of your current yearly billing
                    cycle, but keep in mind that the 10% discount will be
                    removed. To make the change, reach out to our support team
                    during the month before your renewal.
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
        <Divider w="100%" borderColor="#fa5d00" />

        {/* ------------------------------Last block------------------------ */}
        <Flex gap="2rem" marginTop="8%" padding="4% 0%">
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
      </Container>
      <Footer />
    </>
  );
};

export default Pricing;
