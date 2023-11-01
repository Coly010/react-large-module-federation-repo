import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote82',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
