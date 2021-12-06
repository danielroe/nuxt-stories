export default {
  serial: true,
  files: [
    // 'test/specs/DB.spec.js',
    // 'test/specs/Fetch.spec.js',
    // 'test/specs/Import.spec.js',
    // 'test/specs/IO.spec.js',
    // 'test/specs/Markdown.spec.js',
    // 'test/specs/Module.spec.js',
    // 'test/specs/Plugin.spec.js',
    // 'test/specs/PluginRegister.spec.js',
    
    // 'test/specs/Postinstall.spec.js',
    // 'test/specs/Storage.spec.js',
    // 'test/specs/VuexModule.spec.js',
    // 'test/specs/StoryFactory.spec.js',

    // 'test/e2e/Hello.js'
    // 'test/e2e/Root.js', // Runs after DB.spec which initializes db
    // 'test/e2e/Search.js'
    'test/e2e/ModeSelect.js'
  ],
  ignoredByWatcher: ['stories'],
  nodeArguments: [
    '--experimental-loader=./test/utils/loaders.js'
  ],
  tap: false,
  verbose: true
}
