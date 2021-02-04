module.exports = {
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: 'app://./',
      removeElectronJunk: true,
      builderOptions: {
        asar: false,
        extraResources: [
          {
            from: 'dist',
            to: 'app',
          }
        ],
      },

      preload: 'src/preload.ts',

      // List native deps here if they don't work
      externals: [],

      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: [
        'applets/app1/node_modules',
        'applets/app2/node_modules',
      ]
    }
  }
}
