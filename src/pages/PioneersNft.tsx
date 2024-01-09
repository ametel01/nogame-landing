import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { StarknetProvider } from '../components/StarknetProvider';
import { TestnetButton } from '../components/ActionButtons';
import {
  useAccount,
  useContract,
  useContractWrite,
} from '@starknet-react/core';
import { abi } from '../assets/starknet/contract.json';

const address =
  '0x0549b3ba1ea910de6bc55a2e7bc0427d97e948a93732cfedbcf8de9f04bd3a2d';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 20%;
  margin-top: 5%;
  // min-height: 100vh;
  // background-color: #1a2025; // Example space theme color
`;

const EligibilityInstructions = styled.div`
  color: white;
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); // Semi-transparent background for depth
  border-left: 4px solid #4a63aa; // Adding a colored border for emphasis
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem; // Slightly larger font size for better readability
  line-height: 1.5; // Improved line spacing
  width: 35rem;
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  max-width: 80%;
`;

const Input = styled.input`
  background-color: transparent;
  border: 1px solid #e0e0e0;
  color: white;
  border-radius: 0.375rem;
  padding: 0.75rem;
  width: 20rem;
  margin-bottom: 1rem;
`;

const Warning = styled.div`
  color: red;
  margin: 1rem 0;
`;

const ClaimPioneerNft: React.FC = () => {
  const { chainId } = useAccount();
  const MAINNET_ID = 23448594291968334n;
  const isNotMainnet = chainId !== MAINNET_ID;

  const [planetId, setPlanetId] = useState('');
  const [sepoliaAddress, setSepoliaAddress] = useState('');
  const [secret, setSecret] = useState('');
  const [key, setKey] = useState('');

  const { contract } = useContract({
    abi: abi,
    address,
  });

  const calls = useMemo(() => {
    if (
      !address ||
      !contract ||
      !planetId ||
      !sepoliaAddress ||
      !secret ||
      !key
    ) {
      return [];
    }

    // Convert sepoliaAddress to BigInt
    let sepoliaAddressBigInt;
    try {
      sepoliaAddressBigInt = BigInt(sepoliaAddress);
    } catch (error) {
      console.error('Invalid sepolia address format', error);
      return [];
    }

    let keyBigInt;
    try {
      keyBigInt = BigInt(key);
    } catch (error) {
      console.error('Invalid sepolia address format', error);
      return [];
    }

    console.log('key: ', keyBigInt);
    console.log(planetId);
    console.log('sepoliaAddress: ', sepoliaAddressBigInt);
    console.log('secret: ', secret);

    return contract.populateTransaction['mint_nft']!(
      planetId,
      sepoliaAddressBigInt,
      secret,
      keyBigInt
    );
  }, [contract, key, planetId, secret, sepoliaAddress]);

  const { writeAsync } = useContractWrite({
    calls,
  });

  return (
    <StarknetProvider>
      <Container>
        <EligibilityInstructions>
          To be eligible to mint the Pioneer NFT, you must play NoGame Sepolia
          and gain at least 100 points. Once you achieve 100 points, proceed to
          the in-game key generator to generate a key. Return to this page with
          the key to mint your NFT.
        </EligibilityInstructions>
        {isNotMainnet && (
          <Warning>Please connect to Mainnet to proceed.</Warning>
        )}
        <Input
          type="text"
          placeholder="Generated Key"
          onChange={(e) => setKey(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Planet ID"
          onChange={(e) => setPlanetId(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Sepolia Address"
          onChange={(e) => setSepoliaAddress(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Secret"
          onChange={(e) => setSecret(e.target.value)}
        />
        <TestnetButton
          onClick={() => writeAsync()}
          style={{ width: '20rem', borderRadius: '12px' }}
        >
          Mint NFT
        </TestnetButton>
      </Container>
    </StarknetProvider>
  );
};

export default ClaimPioneerNft;
