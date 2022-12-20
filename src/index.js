import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <Auth0Provider
    domain="dev-41od4lghkiqkfqnw.us.auth0.com"
    clientId="dJuCOVPRGxeS4cbjdEPSjoI8jvnfddET"
    redirectUri={window.location.origin}
  >
      <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
      </Auth0Provider>
  </Router>
);