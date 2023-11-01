import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote11',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
