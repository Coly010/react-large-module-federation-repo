import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote73',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
