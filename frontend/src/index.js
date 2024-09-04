import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";
import { ContextProvider } from './Pages/SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <ChatProvider>
    <ChakraProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
    </ChakraProvider>
    </ChatProvider>
    </BrowserRouter>
 
);



