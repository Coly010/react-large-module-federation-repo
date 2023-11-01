import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote28',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
