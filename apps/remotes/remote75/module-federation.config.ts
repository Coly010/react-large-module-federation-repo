import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote75',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
