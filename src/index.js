import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from "./context/cartContext";
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import store from "./redux/store";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    <ChakraProvider>
      <BrowserRouter>
      <Toaster />
      <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
     </ChakraProvider>
   
  </React.StrictMode>,
  document.getElementById("root")
);
