import React from "react";
import NavbarInside from "../../Components/NavbarInside";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Center,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";
import FooterInside from "../../Components/FooterInside";

const Time = () => {
  return (
    <div>
      <NavbarInside />
      <Tabs padding="0% 7%">
        <TabList>
          <Tab>TimeSheet</Tab>
          <Tab>Pending approval</Tab>
          <Tab>Unsubmitted</Tab>
          <Tab>Approved</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading>Today</Heading>
            <br />
            <Center>
              <Flex direction="column" width="40%">
                <Box>
                  <Divider orientation="horizontal" />
                </Box>
                <Box bgColor="#efefef" width="100%" height="50vh">
                  <Flex gap="10rem" marginTop="10%">
                    <Box width="100%">
                      <Box>
                        <Flex>
                          <Box>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="26"
                              viewBox="0 0 60 26"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.29644 0.982199L0.576088 0.915298L0.776825 1.61467C0.777646 1.61763 0.778494 1.62059 0.779369 1.62353L5.51941 18.1379C5.59559 18.4034 5.87252 18.5568 6.13794 18.4806C6.40337 18.4044 6.55678 18.1275 6.4806 17.8621L2.14139 2.74416C3.0193 3.39144 3.90232 4.05518 4.80074 4.7305L4.80076 4.73052C9.36976 8.16494 14.337 11.8987 21.0561 15.2884C29.7012 19.6497 41.2432 23.4453 58.641 25.4049C58.9154 25.4358 59.1629 25.2384 59.1938 24.964C59.2248 24.6895 59.0274 24.442 58.753 24.4111C41.4538 22.4627 30.0297 18.6954 21.5065 14.3956C14.8746 11.0499 9.99687 7.38396 5.43697 3.95692L5.43695 3.9569C4.62227 3.34462 3.81774 2.73997 3.01516 2.14612L22.9538 3.99787C23.2287 4.02341 23.4723 3.82121 23.4979 3.54625C23.5234 3.2713 23.3212 3.0277 23.0462 3.00216L1.31417 0.983846C1.30827 0.983191 1.30235 0.982642 1.29644 0.982199Z"
                                fill="#1D1E1C"
                              ></path>
                            </svg>
                          </Box>
                          <Box>
                            <Box>
                              <b> Start your first timer now</b>
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                    <Box width="100%">
                      <img
                        width="100%"
                        alt="defaultimage"
                        src="https://cache.harvestapp.com/static/illustrations/daily_onboard-5B4D3178.png"
                      />
                    </Box>
                  </Flex>
                  <Center fontSize="18px" marginTop="10%">
                    This is the Day view of your timesheet. Keep track of where
                    your time goes, down to the minute.
                  </Center>
                </Box>
              </Flex>
            </Center>
          </TabPanel>
          <TabPanel>
            <Heading> Pending approval </Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Unsubmitted timesheets</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Approved timesheets</Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <FooterInside />
    </div>
  );
};

export default Time;
