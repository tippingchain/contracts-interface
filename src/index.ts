// Main exports for @tippingchain/contracts-interface
export * from './types';
export * from './addresses';

// Import and re-export the ABI
import StreamingPlatformTippingABI from '../abi/StreamingPlatformTipping.json';

export const STREAMING_PLATFORM_TIPPING_ABI = StreamingPlatformTippingABI;

// Convenience exports
export { 
  MembershipTier,
  SUPPORTED_CHAINS,
  SUPPORTED_TESTNETS,
  NETWORK_CONFIGS,
  CONTRACT_CONSTANTS,
  TIER_CREATOR_SHARES,
  RELAY_RECEIVER_ADDRESSES,
  getRelayReceiverAddress
} from './types';

export {
  CONTRACT_ADDRESSES,
  getContractAddress,
  getAllContractAddresses,
  isContractDeployed
} from './addresses';