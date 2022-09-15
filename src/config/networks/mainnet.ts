import EvmosLogo from 'src/config/assets/token-evmos.png'
import { EnvironmentSettings, EVMOS_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'http://api.heimdall-safe.org/api/v1',
  safeAppsUrl: 'https://heimdall-safe.org',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://eth.bd.evmos.org:8545',
  networkExplorerName: 'Evmos Explorer',
  networkExplorerUrl: 'https://evm.evmos.org',
  networkExplorerApiUrl: 'https://api.etherscan.io/api',
}

const mainnet: NetworkConfig = {
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
    id: EVMOS_NETWORK.MAINNET,
    backgroundColor: '#E8E7E6',
    textColor: '#001428',
    label: 'Mainnet',
    isTestNet: false,
    nativeCoin: {
      address: '0x000',
      name: 'EVMOS',
      symbol: 'EVMOS',
      decimals: 18,
      logoUri: EvmosLogo,
    },
  },
}

export default mainnet
