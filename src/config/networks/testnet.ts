import EvmosLogo from 'src/config/assets/token-evmos.png'
import { EnvironmentSettings, EVMOS_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'http://api.heimdall-safe.org/api/v1',
  safeAppsUrl: 'https://heimdall-safe.org',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://eth.bd.evmos.dev:8545',
  networkExplorerName: 'EVmos Explorer',
  networkExplorerUrl: 'https://evm.evmos.dev/',
  networkExplorerApiUrl: 'https://api-rinkeby.etherscan.io/api',
}

const testnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: 'https://heimdall-safe.org',
    },
    production: {
      ...baseConfig,
      txServiceUrl: 'http://api.heimdall-safe.org/api/v1',
      safeAppsUrl: 'https://heimdall-safe.org',
    },
  },
  network: {
    id: EVMOS_NETWORK.TESTNET,
    backgroundColor: '#E8673C',
    textColor: '#ffffff',
    label: 'Testnet',
    isTestNet: true,
    nativeCoin: {
      address: '0x000',
      name: 'EVMOS',
      symbol: 'EVMOS',
      decimals: 18,
      logoUri: EvmosLogo,
    },
  },
}

export default testnet
