# TippingChain Contracts Interface

This package provides the interface for interacting with TippingChain smart contracts. It includes the ABI, contract addresses, and TypeScript types for seamless integration with frontend and backend applications.

## Overview

TippingChain is a decentralized tipping platform for streaming services, enabling direct payments to content creators across multiple blockchain networks. This interface package facilitates interaction with the deployed smart contracts, supporting features like tipping creators, viewer rewards, and administrative functions.

## Features

- **ABI Definitions**: JSON ABI for the `StreamingPlatformTipping` contract.
- **TypeScript Types**: Type definitions for contract interactions, including membership tiers and network configurations.
- **Contract Addresses**: Deployment manifest with addresses for supported chains (mainnet and testnet).
- **Network Configurations**: Constants and helpers for supported blockchain networks.

## Installation

```bash
npm install @tippingchain/contracts-interface
```

## Usage

### Importing ABI

```javascript
import StreamingPlatformTippingABI from '@tippingchain/contracts-interface/abi/StreamingPlatformTipping.json';
```

### Using Types and Constants

```typescript
import { MembershipTier, SUPPORTED_CHAINS, CONTRACT_CONSTANTS } from '@tippingchain/contracts-interface';

// Check platform fee
console.log(`Platform fee: ${CONTRACT_CONSTANTS.TIPPINGCHAIN_FEE / CONTRACT_CONSTANTS.BASIS_POINTS * 100}%`);

// Get creator share for a tier
import { TIER_CREATOR_SHARES } from '@tippingchain/contracts-interface';
console.log(`Creator share for Tier 2: ${TIER_CREATOR_SHARES[MembershipTier.TIER_2] / CONTRACT_CONSTANTS.BASIS_POINTS * 100}%`);
```

### Accessing Contract Addresses

```typescript
import { addresses } from '@tippingchain/contracts-interface';

const contractAddress = addresses[SUPPORTED_CHAINS.APECHAIN];
console.log(`ApeChain contract address: ${contractAddress}`);
```

## Supported Chains

- Ethereum (1)
- Polygon (137)
- Optimism (10)
- Binance Smart Chain (56)
- Abstract (2741)
- ApeChain (33139)
- Avalanche (43114)
- Base (8453)
- Arbitrum (42161)
- Taiko (167000)

## Key Contract Features

- **Tipping**: Users can send tips to creators with supported tokens or native currency.
- **Viewer Rewards**: Mechanism to reward viewers for engagement, with configurable fees.
- **Membership Tiers**: Different tiers for creators affecting revenue splits (60/40 to 90/10).
- **Admin Roles**: Support for administrative functions like managing creators and relayers.
- **Cross-Chain Relay**: Integration with relay.link for cross-chain token transfers.

## Development

To update contract addresses after deployment:

```bash
node scripts/update-addresses.js
```

## License

MIT
