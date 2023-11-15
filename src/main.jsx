import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains";
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}
        activeChain={Sepolia}
        clientId="23547155b80c0dca979f4f8d3115f801">
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)