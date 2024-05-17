
## Frontend

## Table of Contents

1. [Frontend](#frontend)
    - [Setup Instructions](#frontend-setup-instructions)
    - [Running the Application](#running-the-application)
    - [Main Components](#main-components)
2. [Blockchain Integration](#blockchain-integration)
3. [Connecting MetaMask](#connecting-metamask)

The frontend is built with React.js.

### Frontend Setup Instructions

1. **Navigate to the frontend directory**:
    ```sh
    git clone <repository-url>
    cd repository/frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

### Running the Application

1. **Start the application**:
    ```sh
    npm start
    ```

    The application will run on `http://localhost:4200`.

### Main Components

- **App.jsx**: Main component that sets up routing/encapsulate the layout.
- **HeroSection.jsx**: Contains the hero section with buttons to connect wallet and add new item.
- **Items.jsx**: Fetches and displays the list of items from the backend.
- **Modal.jsx**: Handles item creation and hits the backend endpoint to add new items.

## Blockchain Integration

The application integrates with the Ethereum blockchain using Web3.js. The current network status (connected or disconnected) and the latest block number are displayed in the `HeroSection` component.

## Connecting MetaMask

1. **Install MetaMask**: Ensure that MetaMask is installed in your browser.

2. **Connect MetaMask to the application**:
    - Click the "Connect Wallet" button in the hero section.
    - Grant the application permission to access your MetaMask account.

3. **View Blockchain Information**:
    - Once connected, the application will display your account address and the latest block number.
