import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote16',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
