module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  // 测试环境搭建好后执行的文件
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.js",
    './node_modules/jest-enzyme/lib/index.js',
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  // 测试环境：在 node 环境中模拟 dom api
  "testEnvironment": "jsdom",
  "testRunner": "C:\\Users\\tctao\\Desktop\\Web Projects\\HelloWeb\\jest-react\\node_modules\\jest-circus\\runner.js",
  "transform": {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    // identity-obj-proxy 是一个第三方模块，在测试文件中引入 css module 文件时，该模块会将原始样式转换成一个对象
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  // 引入模块时，如没有写后缀，会自动搜索的文件后缀类型
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  // 增加运行 jest 时可选的模式
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  "resetMocks": true
}