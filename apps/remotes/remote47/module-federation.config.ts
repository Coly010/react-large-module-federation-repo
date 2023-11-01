import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote47',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
