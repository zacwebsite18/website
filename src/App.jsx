import React from 'react';
import { Provider, defaultTheme, Tabs, TabList, TabPanels, Item, View, Heading, Footer, Image, Text } from '@adobe/react-spectrum';
import Info from '@spectrum-icons/workflow/Info';
import Mailbox from '@spectrum-icons/workflow/Mailbox';
import logo from './images/logo.png'; // Import the logo

const darkThemeColors = {
  background: '#00482B', // Dark Green
  text: '#d69a00', // Gold for contrast
};

function App() {
  return (
    <Provider theme={defaultTheme} minHeight="100vh" UNSAFE_style={{ backgroundColor: darkThemeColors.background }}>
      {/* Header Section */}
      <View padding="size-400" UNSAFE_style={{
        textAlign: 'center',
        color: darkThemeColors.text,
        padding: '4rem 1rem'
      }}>
        <Image 
          width={500}
          src={logo} 
          alt="Team Logo" 
          style={{ height: '50px', borderRadius: '50%' }}
          justifySelf={'center'}
        />
        <Heading level={1} marginTop="size-100">
          ______
        </Heading>
        <p>Pro Soccer Player for Portland | Anti-Bullying Advocate</p>
      </View>

      {/* Tabs with Icons */}
      <Tabs aria-label="Zac McGraw Sections" UNSAFE_style={{ color: darkThemeColors.text }}>
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
              <Heading level={2}>About ______</Heading>
              <p>
                I’m ______, a professional soccer player for Portland. I’m passionate about supporting children who 
                face challenges in school due to bullying. My goal is to build confidence and create a safe space for 
                them through this initiative.
              </p>
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
                  borderRadius: '8px',
                }}
              >
                Loading…
              </iframe>
            </View>
          </Item>
        </TabPanels>
      </Tabs>

      {/* Footer Section */}
      <Footer UNSAFE_style={{
        backgroundColor: '#003921',
        padding: '2rem',
        color: '#d69a00',
        textAlign: 'center'
      }}>
        <p>&copy; 2025 ______ | All Rights Reserved</p>
      </Footer>
    </Provider>
  );
}

export default App;
