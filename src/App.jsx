import React, { useState, useEffect } from "react";
import {
  Provider,
  defaultTheme,
  Tabs,
  TabList,
  TabPanels,
  Item,
  View,
  Heading,
  Footer,
  Image,
  Flex,
  Text,
} from "@adobe/react-spectrum";
import Info from "@spectrum-icons/workflow/Info";
import Mailbox from "@spectrum-icons/workflow/Mailbox";
import logo1 from "./images/logo1.png"; // First logo
import logo2 from "./images/logo2.png"; // Second logo
import logo3 from "./images/logo3.png"; // Third logo

const darkThemeColors = {
  background: "#00482B", // Dark Green
  text: "#d69a00", // Gold for contrast
};

function App() {
  // Carousel state
  const [currentLogo, setCurrentLogo] = useState(logo1);
  const logos = [logo1, logo2, logo3]; // Array of logo images
  let logoIndex = 0;

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      logoIndex = (logoIndex + 1) % logos.length; // Rotate through logos
      setCurrentLogo(logos[logoIndex]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Provider
      theme={defaultTheme}
      minHeight="100vh"
      UNSAFE_style={{
        backgroundColor: darkThemeColors.background,
        color: darkThemeColors.text,
      }}
    >
      {/* Header Section with Carousel */}
      <View
        padding="size-400"
        UNSAFE_style={{ textAlign: "center", padding: "4rem 1rem" }}
      >
        <Image
          src={currentLogo}
          alt="Team Logo"
          height="100px"
          UNSAFE_style={{ borderRadius: "50%", marginBottom: "1rem" }}
        />
        <Heading level={1}>Zac McGraw</Heading>
        <Text>Pro Soccer Player for Portland | Anti-Bullying Advocate</Text>
      </View>

      {/* Tabs Section */}
      <Tabs
        aria-label="Zac McGraw Sections"
        UNSAFE_style={{ marginTop: "2rem" }}
      >
        <TabList>
          <Item key="about" textValue="About">
            <Info />
            <Text>About</Text>
          </Item>
          <Item key="form" textValue="Contact Form">
            <Mailbox />
            <Text>Contact Form</Text>
          </Item>
        </TabList>
        <TabPanels>
          <Item key="about">
            <View padding="size-200">
              <Heading level={2}>About Zac McGraw</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel lacus nec elit tempor posuere. Phasellus eget augue eget
                nisi aliquam tincidunt.
              </Text>
              {/* Two-by-Two Flex Layout */}
              <Flex
                direction="column"
                gap="size-300"
                marginX="size-800"
                marginTop="size-500"
              >
                {/* Row 1: Text | Image */}
                <Flex
                  direction={{ base: "column", M: "row" }}
                  gap="size-300"
                  alignItems="center"
                >
                  <View flex>
                    <Heading level={3}>Building Confidence</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce eget feugiat elit.
                    </Text>
                  </View>
                  <Image
                    src={logo1}
                    alt="Kids"
                    height="200px"
                    UNSAFE_style={{ borderRadius: "8px" }}
                  />
                </Flex>

                {/* Row 2: Image | Text */}
                <Flex
                  direction={{ base: "column", M: "row" }}
                  gap="size-300"
                  alignItems="center"
                >
                  <Image
                    src={logo2}
                    alt="Team"
                    height="200px"
                    UNSAFE_style={{ borderRadius: "8px" }}
                  />
                  <View flex>
                    <Heading level={3}>Supporting Community</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vitae risus in sem tincidunt viverra.
                    </Text>
                  </View>
                </Flex>
              </Flex>
            </View>
          </Item>
          <Item key="form">
            <View padding="size-200">
              <Heading level={2}>Contact Me</Heading>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfRY84btnGkIcjYM5Fen5cJZMFrZWbq01XgkY_sMbeyoQtOhw/viewform?embedded=true"
                width="100%"
                height="600px"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Google Form"
                style={{
                  border: `2px solid ${darkThemeColors.text}`,
                  borderRadius: "8px",
                }}
              >
                Loading…
              </iframe>
            </View>
          </Item>
        </TabPanels>
      </Tabs>

      {/* Footer Section */}
      <Footer
        UNSAFE_style={{
          backgroundColor: "#003921",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Text>&copy; 2025 Zac McGraw | All Rights Reserved</Text>
      </Footer>
    </Provider>
  );
}

export default App;
