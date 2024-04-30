import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'StoreIncomeSystem',
  //bundledWebRuntime: false,
  npmClient: 'npm',
  webDir: 'dist',
  //webDir: 'www',
  plugins: {
    CapacitorSQLite: {
      web: {
        import: '@capacitor-community/sqlite',
        shouldServePolyfill: true,
      },
    },
  },
};

export default config;
