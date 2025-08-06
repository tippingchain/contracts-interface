import { ContractAddresses, DeploymentManifest } from './types';

// This file will be updated by the deployment scripts
// For now, it contains placeholder addresses that must be configured
export const CONTRACT_ADDRESSES: DeploymentManifest = {
  mainnet: {
    1: "", // Ethereum
    10: "", // Optimism
    56: "", // BSC
    137: "", // Polygon
    2741: "", // Abstract
    8453: "0x7E51b1A637efccBd91cE2e951953b8CCC7DAbc07", // Base ✅ DEPLOYED
    33139: "", // ApeChain
    42161: "", // Arbitrum
    43114: "", // Avalanche
    167000: "" // Taiko
  },
  testnet: {
    97: "", // BSC Testnet
    11124: "", // Abstract Testnet
    17000: "", // Holesky (Ethereum)
    33111: "", // Curtis (ApeChain)
    43113: "", // Fuji (Avalanche)
    80002: "", // Amoy (Polygon)
    84532: "", // Base Sepolia
    167009: "", // Taiko Hekla
    421614: "", // Arbitrum Sepolia
    11155420: "" // Optimism Sepolia
  },
  timestamp: "2025-08-06T07:39:03.822Z",
  version: "1.2.0"
};

export function getContractAddress(chainId: number, isTestnet: boolean = false): string | undefined {
  const network = isTestnet ? 'testnet' : 'mainnet';
  return CONTRACT_ADDRESSES[network][chainId];
}

export function getAllContractAddresses(isTestnet: boolean = false): ContractAddresses {
  const network = isTestnet ? 'testnet' : 'mainnet';
  return CONTRACT_ADDRESSES[network];
}

export function isContractDeployed(chainId: number, isTestnet: boolean = false): boolean {
  const address = getContractAddress(chainId, isTestnet);
  return !!address && address !== '';
}