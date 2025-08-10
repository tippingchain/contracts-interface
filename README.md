# @tippingchain/contracts-interface

Public contract interfaces and ABIs for TippingChain. This package provides the necessary interfaces to interact with TippingChain smart contracts without exposing implementation details.

## Version 1.2.0 Updates ✨
- **✅ Base Mainnet Live**: Contract deployed at `0x4d720d3916af749F5bCD00409B59Ec35E654290B`
- **🔐 Admin Role System**: Both contract owner and designated admins can manage creators
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

// Get Base mainnet contract address (LIVE!)
const baseContract = getContractAddress(SUPPORTED_CHAINS.BASE);
console.log(baseContract); // 0x4d720d3916af749F5bCD00409B59Ec35E654290B

// Get the correct relay receiver for Base
const relayReceiver = getRelayReceiverAddress(SUPPORTED_CHAINS.BASE);

// Access new constants
const viewerRewardFee = CONTRACT_CONSTANTS.VIEWER_REWARD_FEE; // 100 (1% platform fee)
const relayRouter = CONTRACT_CONSTANTS.RELAY_ERC20_ROUTER;

// Use the ABI with ethers or web3 on Base
const contract = new ethers.Contract(
  baseContract,
  STREAMING_PLATFORM_TIPPING_ABI,
  provider
);

// Example: Add a creator on Base (requires owner or admin permissions)
await contract.addCreator(
  "0x742d35Cc6648C4532b4C7C8E2a6A6F5a8C8D7C21", // creator wallet
  MembershipTier.TIER_2, // 70/30 split
  "" // thirdweb ID (optional)
);

// Grant admin privileges (owner only)
await contract.grantAdmin("0xAdminWalletAddress");

// Check if address is an admin
const isAdmin = await contract.admins("0xAdminWalletAddress");
```

## Contract Addresses

Contract addresses are managed through the deployment manifest. After contracts are deployed, the addresses will be updated in this package.

### 🚀 Live Deployment Status
- **Base Mainnet**: ✅ **LIVE** - Ready for production tips → USDC on ApeChain
- **Other Networks**: 🔄 **Coming Soon** - Deploy using existing Base setup

### Mainnet Addresses
- Ethereum: TBD
- Polygon: TBD
- Optimism: TBD
- BSC: TBD
- Abstract: TBD
- Avalanche: TBD
- **Base: `0x4d720d3916af749F5bCD00409B59Ec35E654290B`** ✅ **DEPLOYED**
  - **Admin System**: Multi-admin creator management enabled
  - Supported tokens: USDC, DAI, WETH
- Arbitrum: TBD
- Taiko: TBD
- ApeChain: TBD (Destination chain for USDC payouts)

### Testnet Addresses (v2.0 Updated)
- **Holesky (Ethereum)**: TBD (replaces deprecated Sepolia)
- **Amoy (Polygon)**: TBD (replaces deprecated Mumbai)
- Optimism Sepolia: TBD
- BSC Testnet: TBD
- Avalanche Fuji: TBD
- Base Sepolia: TBD
- Arbitrum Sepolia: TBD
- Taiko Hekla: TBD
- **Curtis (ApeChain)**: TBD (destination chain for testnet)

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