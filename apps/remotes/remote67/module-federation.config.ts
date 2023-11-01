import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote67',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
