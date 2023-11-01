import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote81',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
