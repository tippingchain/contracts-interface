export enum MembershipTier {
  TIER_1 = 0, // 60/40 split (creator/business)
  TIER_2 = 1, // 70/30 split
  TIER_3 = 2, // 80/20 split
  TIER_4 = 3  // 90/10 split
}

export interface ContractAddresses {
  [chainId: number]: string;
}

export interface DeploymentManifest {
  mainnet: ContractAddresses;
  testnet: ContractAddresses;
  timestamp: string;
  version: string;
}

export interface NetworkConfig {
  chainId: number;
  name: string;
  rpcUrl?: string;
  blockExplorer?: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

export const SUPPORTED_CHAINS = {
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
} as const;

export const SUPPORTED_TESTNETS = {
  HOLESKY: 17000,        // Ethereum testnet
  AMOY: 80002,           // Polygon testnet (replaces Mumbai)
  OPTIMISM_SEPOLIA: 11155420,
  BSC_TESTNET: 97,
  ABSTRACT_TESTNET: 11124,
  CURTIS: 33111,         // ApeChain testnet
  FUJI: 43113,           // Avalanche testnet
  BASE_SEPOLIA: 84532,
  ARBITRUM_SEPOLIA: 421614,
  TAIKO_HEKLA: 167009
} as const;

export const NETWORK_CONFIGS: Record<number, NetworkConfig> = {
  [SUPPORTED_CHAINS.ETHEREUM]: {
    chainId: 1,
    name: 'Ethereum',
    blockExplorer: 'https://etherscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.POLYGON]: {
    chainId: 137,
    name: 'Polygon',
    blockExplorer: 'https://polygonscan.com',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.OPTIMISM]: {
    chainId: 10,
    name: 'Optimism',
    blockExplorer: 'https://optimistic.etherscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.BSC]: {
    chainId: 56,
    name: 'BSC',
    blockExplorer: 'https://bscscan.com',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.ABSTRACT]: {
    chainId: 2741,
    name: 'Abstract',
    blockExplorer: 'https://explorer.abstract.money',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.APECHAIN]: {
    chainId: 33139,
    name: 'ApeChain',
    blockExplorer: 'https://apescan.io',
    nativeCurrency: {
      name: 'APE',
      symbol: 'APE',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.AVALANCHE]: {
    chainId: 43114,
    name: 'Avalanche',
    blockExplorer: 'https://snowtrace.io',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.BASE]: {
    chainId: 8453,
    name: 'Base',
    blockExplorer: 'https://basescan.org',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.ARBITRUM]: {
    chainId: 42161,
    name: 'Arbitrum',
    blockExplorer: 'https://arbiscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  [SUPPORTED_CHAINS.TAIKO]: {
    chainId: 167000,
    name: 'Taiko',
    blockExplorer: 'https://taikoscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  }
};

// Contract constants
export const CONTRACT_CONSTANTS = {
  TIPPINGCHAIN_FEE: 500, // 5% in basis points
  VIEWER_REWARD_FEE: 100, // 1% in basis points
  BASIS_POINTS: 10000,
  MIN_TIP_AMOUNT: 1000,
  MIN_VIEWER_REWARD: 100,
  APECHAIN_ID: 33139,
  APECHAIN_USDC: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
  RELAY_ERC20_ROUTER: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222'
} as const;

// Tier creator shares (in basis points, applied after platform fee)
export const TIER_CREATOR_SHARES = {
  [MembershipTier.TIER_1]: 6000, // 60%
  [MembershipTier.TIER_2]: 7000, // 70%
  [MembershipTier.TIER_3]: 8000, // 80%
  [MembershipTier.TIER_4]: 9000  // 90%
} as const;

// Relay.link receiver addresses by chain (for integrated architecture)
export const RELAY_RECEIVER_ADDRESSES = {
  // Most chains use the standard receiver
  DEFAULT: '0xa5f565650890fba1824ee0f21ebbbf660a179934',
  // ApeChain uses a different receiver
  APECHAIN: '0xa06e1351e2fd2d45b5d35633ca7ecf328684a109'
} as const;

// Helper function to get the correct relay receiver for a chain
export function getRelayReceiverAddress(chainId: number): string {
  return chainId === SUPPORTED_CHAINS.APECHAIN 
    ? RELAY_RECEIVER_ADDRESSES.APECHAIN 
    : RELAY_RECEIVER_ADDRESSES.DEFAULT;
}