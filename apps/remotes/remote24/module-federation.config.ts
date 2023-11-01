import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote24',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
