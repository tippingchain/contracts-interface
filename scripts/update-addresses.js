#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Updates the contract addresses in the contracts-interface package
 * This script should be run after deploying contracts
 * 
 * Usage:
 * node update-addresses.js --network mainnet --addresses '{"1":"0x...","137":"0x..."}'
 * or
 * node update-addresses.js --network mainnet --file deployments/mainnet.json
 */

const args = process.argv.slice(2);
const networkIndex = args.indexOf('--network');
const addressesIndex = args.indexOf('--addresses');
const fileIndex = args.indexOf('--file');

if (networkIndex === -1) {
  console.error('Error: --network parameter is required (mainnet or testnet)');
  process.exit(1);
}

const network = args[networkIndex + 1];
if (!['mainnet', 'testnet'].includes(network)) {
  console.error('Error: network must be either "mainnet" or "testnet"');
  process.exit(1);
}

let addresses = {};

if (addressesIndex !== -1) {
  // Parse addresses from command line
  try {
    addresses = JSON.parse(args[addressesIndex + 1]);
  } catch (error) {
    console.error('Error: Invalid JSON format for addresses');
    process.exit(1);
  }
} else if (fileIndex !== -1) {
  // Read addresses from file
  const filePath = args[fileIndex + 1];
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    addresses = JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }
} else {
  console.error('Error: Either --addresses or --file parameter is required');
  process.exit(1);
}

// Read current addresses file
const addressesPath = path.join(__dirname, '../src/addresses.ts');
let addressesContent = fs.readFileSync(addressesPath, 'utf8');

// Extract current CONTRACT_ADDRESSES object
const contractAddressesMatch = addressesContent.match(/export const CONTRACT_ADDRESSES: DeploymentManifest = ({[\s\S]*?});/);
if (!contractAddressesMatch) {
  console.error('Error: Could not find CONTRACT_ADDRESSES in addresses.ts');
  process.exit(1);
}

// Parse current addresses
const currentAddresses = eval('(' + contractAddressesMatch[1] + ')');

// Update addresses for the specified network
Object.entries(addresses).forEach(([chainId, address]) => {
  currentAddresses[network][chainId] = address;
});

// Update timestamp and version
currentAddresses.timestamp = new Date().toISOString();
currentAddresses.version = require('../package.json').version;

// Generate new content
const newContractAddresses = `export const CONTRACT_ADDRESSES: DeploymentManifest = ${JSON.stringify(currentAddresses, null, 2).replace(/"([^"]+)":/g, '$1:')};`;

// Replace in file
addressesContent = addressesContent.replace(
  /export const CONTRACT_ADDRESSES: DeploymentManifest = {[\s\S]*?};/,
  newContractAddresses
);

// Write back to file
fs.writeFileSync(addressesPath, addressesContent);

console.log(`✅ Successfully updated ${network} addresses:`);
Object.entries(addresses).forEach(([chainId, address]) => {
  console.log(`   Chain ${chainId}: ${address}`);
});
console.log(`📅 Timestamp: ${currentAddresses.timestamp}`);
console.log(`📦 Version: ${currentAddresses.version}`);