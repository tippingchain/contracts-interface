import { ContractAddresses, DeploymentManifest } from './types';

// This file will be updated by the deployment scripts
// For now, it contains placeholder addresses that must be configured
export const CONTRACT_ADDRESSES: DeploymentManifest = {
  mainnet: {
    1: "",
    10: "",
    56: "",
    137: "",
    2741: "",
    8453: "0x4d720d3916af749F5bCD00409B59Ec35E654290B",
    33139: "",
    42161: "",
    43114: "",
    167000: ""
  },
  testnet: {
    97: "",
    11124: "",
    17000: "",
    33111: "",
    43113: "",
    80002: "",
    84532: "",
    167009: "",
    421614: "",
    11155420: ""
  },
  timestamp: "2025-08-10T11:36:34.464Z",
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