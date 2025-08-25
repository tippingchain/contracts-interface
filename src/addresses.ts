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
    8453: "0x0430E9549f384529F254983Cf93d54430bE6201C",
    33139: "0x7E51b1A637efccBd91cE2e951953b8CCC7DAbc07",
    42161: "",
    43114: "",
    167000: ""
  },
  testnet: {
    97: "",
    11124: "",
    17000: "0x7CFf1b1Bd0803D2Ef0b4F4273a3cff15e935017b", // Holesky source contract
    33111: "0x2b50C16877a3E262e0D5B9a4B9f7517634Ba27d8", // Curtis destination contract
    43113: "",
    80002: "",
    84532: "",
    167009: "",
    421614: "",
    11155420: ""
  },
  timestamp: "2025-08-24T15:16:00.000Z", 
  version: "1.5.0"
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