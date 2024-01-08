import React from 'react';
import Button from '@mui/material/Button';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useStarkName,
} from '@starknet-react/core';
import argenWallet from '../assets/argent.png';
import braavosWallet from '../assets/braavos.svg';
import LogoutIcon from '@mui/icons-material/Logout';

const StyledBox = styled(Box)({
  fontSize: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#1B1E2A',
  border: '1px solid #282C3E',
  borderRadius: 16,
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  padding: '24px 12px',
  // display: "grid",
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
});

const HeaderDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',
});

const CloseStyledIcon = styled(CloseIcon)({
  cursor: 'pointer',
  padding: '0 8px',
  fontSize: '2em',
  position: 'absolute',
  top: 8, // You can adjust this value as needed
  right: 8, // You can adjust this value as needed
  transition: 'boxShadow 0.3s ease', // Smooth transition for the shadow on hover

  '&:hover': {
    boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.2)', // Circle shadow effect
    borderRadius: '50%', // Ensures the shadow takes a circular form
  },
});

const StyledUl = styled('ul')({
  padding: '8px',
  flexGrow: 1,
});

const StyledLi = styled('li')({
  listStyleType: 'none',
  margin: '8px',
});

const ConnectorText = styled('span')({
  flexGrow: 1,
  textAlign: 'center',
  fontWeight: 'bold',
});

const DisclaimerText = styled('div')({
  fontSize: '12px',
  fontWeight: '400',
  width: '100%',
  textAlign: 'center',
});

const ToolbarButton = styled(Button)({
  width: '60%',
  borderRadius: 8,
  padding: '8px 32px',
  textTransform: 'capitalize',
  letterSpacing: '0.1em',
  backgroundColor: '#4a63aa', // Slightly lighter background for the button
  display: 'flex',
  color: '#F4F3EE',
  justifyContent: 'center',
  '&:hover': {
    background: '#445c9c', // Slightly lighter than #1B1E2A for a subtle hover effect
  },
});

const WalletButton = styled(Button)({
  width: '100%',
  borderRadius: 8,
  padding: '8px 32px',
  textTransform: 'capitalize',
  letterSpacing: '0.1em',
  backgroundColor: '#282C3E', // Slightly lighter background for the button
  display: 'flex',
  color: '#F4F3EE',
  justifyContent: 'center',
  '&:hover': {
    background: '##282C3E', // Slightly lighter than #1B1E2A for a subtle hover effect
  },
});

const ArgentMobileWalletIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="#FF875B" />
    <path
      d="M18.316 8H13.684C13.5292 8 13.4052 8.1272 13.4018 8.28531C13.3082 12.7296 11.0323 16.9477 7.11513 19.9355C6.99077 20.0303 6.96243 20.2085 7.05335 20.3369L9.76349 24.1654C9.85569 24.2957 10.0353 24.3251 10.1618 24.2294C12.6111 22.3734 14.5812 20.1345 16 17.6529C17.4187 20.1345 19.389 22.3734 21.8383 24.2294C21.9646 24.3251 22.1443 24.2957 22.2366 24.1654L24.9467 20.3369C25.0375 20.2085 25.0092 20.0303 24.885 19.9355C20.9676 16.9477 18.6918 12.7296 18.5983 8.28531C18.5949 8.1272 18.4708 8 18.316 8Z"
      fill="white"
    />
  </svg>
);

const ArgentWebWalletIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd" // In JSX, use camelCase for attributes like fillRule and clipRule
      clipRule="evenodd"
      d="M1.5 0.4375C0.982233 0.4375 0.5625 0.857233 0.5625 1.375V12C0.5625 12.4144 0.72712 12.8118 1.02015 13.1049C1.31317 13.3979 1.7106 13.5625 2.125 13.5625H15.875C16.2894 13.5625 16.6868 13.3979 16.9799 13.1049C17.2729 12.8118 17.4375 12.4144 17.4375 12V1.375C17.4375 0.857233 17.0178 0.4375 16.5 0.4375H1.5ZM2.4375 3.50616V11.6875H15.5625V3.50616L9.63349 8.94108C9.27507 9.26964 8.72493 9.26964 8.36651 8.94108L2.4375 3.50616ZM14.0899 2.3125H3.91013L9 6.97822L14.0899 2.3125Z"
      fill="currentColor"
    />
  </svg>
);

const getConnectorIcon = (connectorId: string) => {
  switch (connectorId) {
    case 'braavos':
      return braavosWallet;
    case 'argentX':
      return argenWallet;
    case 'argentWebWallet':
      return <ArgentWebWalletIcon />; // Assuming you use the same icon for argentWebWallet
    case 'argentMobile':
      return <ArgentMobileWalletIcon />; // This is a React component
    default:
      return null; // Default case if the connectorId doesn't match any known ids
  }
};

export default function ConnectWallet() {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen((prevState) => !prevState);
  const handleClose = () => setOpen(false);
  const { connect, connectors } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data } = useStarkName({ address });

  const handleClick = (connector: Connector) => {
    connect({ connector });
    handleClose();
  };

  // Function to format the address
  const formatAddress = (address: string) =>
    `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  return (
    <>
      {!address ? (
        <ToolbarButton
          startIcon={<AccountBalanceWalletIcon />}
          onClick={toggleModal}
          style={{ fontWeight: 'bold' }}
        >
          Connect
        </ToolbarButton>
      ) : (
        <ToolbarButton
          startIcon={<LogoutIcon />}
          onClick={() => disconnect()}
          style={{ fontWeight: 'bold' }}
        >
          {data ? data : formatAddress(address)}
        </ToolbarButton>
      )}
      <Modal
        open={open}
        onClose={toggleModal}
        aria-label="Connect Wallet Modal"
        disableAutoFocus={true}
      >
        <StyledBox>
          <HeaderDiv>
            Connect a Wallet
            <CloseStyledIcon onClick={toggleModal} />
          </HeaderDiv>
          <StyledUl>
            {connectors && connectors.length > 0 ? (
              connectors.map((connector) => {
                const ConnectorIcon = getConnectorIcon(connector.id);
                return (
                  <StyledLi key={connector.id}>
                    <WalletButton
                      size="large"
                      onClick={() => handleClick(connector)}
                    >
                      {typeof ConnectorIcon === 'string' ? (
                        <img
                          src={ConnectorIcon}
                          alt={connector.id}
                          style={{ width: '20px' }}
                        />
                      ) : (
                        ConnectorIcon // This is the case where the icon is a React component
                      )}
                      <ConnectorText>{connector.id}</ConnectorText>
                    </WalletButton>
                  </StyledLi>
                );
              })
            ) : (
              <div>No connectors available</div>
            )}
          </StyledUl>
          <DisclaimerText>
            By connecting your wallet, you acknowledge and accept all risks and
            responsibilities related to this decentralized application.
          </DisclaimerText>
        </StyledBox>
      </Modal>
    </>
  );
}
