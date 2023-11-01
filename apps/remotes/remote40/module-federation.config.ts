import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote40',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
