import React from 'react';

import { jsonRpcProvider } from '@starknet-react/core';
import { InjectedConnector } from 'starknetkit/injected';
import { ArgentMobileConnector } from 'starknetkit/argentMobile';
import { WebWalletConnector } from 'starknetkit/webwallet';
import { mainnet } from '@starknet-react/chains';
import { StarknetConfig } from '@starknet-react/core';

const RPC_URL = import.meta.env.VITE_INFURA_RPC;

function rpc() {
  return {
    nodeUrl: RPC_URL,
  };
}

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const chains = [mainnet];
  const provider = jsonRpcProvider({ rpc });
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos', name: 'Braavos' } }),
    new InjectedConnector({ options: { id: 'argentX', name: 'Argent X' } }),
    new WebWalletConnector({ url: 'https://web.argent.xyz' }),
    new ArgentMobileConnector(),
  ];

  return (
    <StarknetConfig chains={chains} provider={provider} connectors={connectors}>
      {children}
    </StarknetConfig>
  );
}
