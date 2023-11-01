import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote68',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
