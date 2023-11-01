import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote86',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
