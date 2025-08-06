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
    8453: "",
    33139: "",
    42161: "",
    43114: "",
    167000: "",
    mainnet: {
      8453: "0x7E51b1A637efccBd91cE2e951953b8CCC7DAbc07"
    },
    testnet: {},
    timestamp: "2025-08-06T07:39:00.587Z",
    version: "1.0.0"
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