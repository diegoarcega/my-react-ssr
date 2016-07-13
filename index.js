require("babel-core").transform("code", {
  plugins: [
    "transform-react-jsx",
    "transform-es2015-literals",
    "transform-es2015-function-name",
    "transform-runtime"
  ],
  presets: ["es2015", "react"]
})


import './bin/server.universal'
