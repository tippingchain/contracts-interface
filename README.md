# @tippingchain/contracts-interface

Public contract interfaces and ABIs for TippingChain. This package provides the necessary interfaces to interact with TippingChain smart contracts without exposing implementation details.

## Version 1.2.0 Updates
- **Integrated Relay.link Architecture**: Direct integration in TippingChain Contracts.
- **Updated ABI**: Latest contract ABI with integrated relay functionality
- **New Constants**: Added RELAY_ERC20_ROUTER, VIEWER_REWARD_FEE, relay receiver addresses
- **Testnet Updates**: Updated to Holesky (replacing Sepolia) and Amoy (replacing Mumbai)
- **Viewer Rewards**: Full support for viewer rewards system with 1% platform fee
- **Relay Receiver Helpers**: Added getRelayReceiverAddress() function for chain-specific receivers

## Installation

```bash
npm install @tippingchain/contracts-interface
```

## Usage

```typescript
import { 
  STREAMING_PLATFORM_TIPPING_ABI,
  SUPPORTED_CHAINS,
  SUPPORTED_TESTNETS,
  MembershipTier,
  CONTRACT_CONSTANTS,
  RELAY_RECEIVER_ADDRESSES,
  getContractAddress,
  getRelayReceiverAddress
} from '@tippingchain/contracts-interface';

// Get contract address for a specific chain
const polygonContract = getContractAddress(SUPPORTED_CHAINS.POLYGON);

// Get the correct relay receiver for a chain
const relayReceiver = getRelayReceiverAddress(SUPPORTED_CHAINS.ETHEREUM);

// Access new constants
const viewerRewardFee = CONTRACT_CONSTANTS.VIEWER_REWARD_FEE; // 100 (1% platform fee)
const relayRouter = CONTRACT_CONSTANTS.RELAY_ERC20_ROUTER;

// Use the ABI with ethers or web3
const contract = new ethers.Contract(
  polygonContract,
  STREAMING_PLATFORM_TIPPING_ABI,
  provider
);
```

## Contract Addresses

Contract addresses are managed through the deployment manifest. After contracts are deployed, the addresses will be updated in this package.

### Mainnet Addresses
- Ethereum: TBD
- Polygon: TBD
- Optimism: TBD
- BSC: TBD
- Abstract: TBD
- Avalanche: TBD
- Base: TBD
- Arbitrum: TBD
- Taiko: TBD
- ApeChain: TBD (Destination chain for USDC payouts)

### Testnet Addresses
- Sepolia: TBD
- Mumbai: TBD
- Optimism Goerli: TBD
- BSC Testnet: TBD
- Avalanche Fuji: TBD
- Base Sepolia: TBD
- Arbitrum Sepolia: TBD
- Taiko Hekla: TBD
- ApeChain Testnet: TBD

## Types

### MembershipTier
```typescript
enum MembershipTier {
  TIER_1 = 0, // 60/40 split (creator/business)
  TIER_2 = 1, // 70/30 split
  TIER_3 = 2, // 80/20 split
  TIER_4 = 3  // 90/10 split
}
```

### Supported Chains
```typescript
const SUPPORTED_CHAINS = {
  ETHEREUM: 1,
  POLYGON: 137,
  OPTIMISM: 10,
  BSC: 56,
  ABSTRACT: 2741,
  APECHAIN: 33139,
  AVALANCHE: 43114,
  BASE: 8453,
  ARBITRUM: 42161,
  TAIKO: 167000
}
```

## License

MIT