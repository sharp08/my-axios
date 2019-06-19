const webpack = require("webpack")
const path = require("path")
module.exports = {
  devServer:{
    port:55555,
    proxy:"https://easy-mock.com"
  },
  lintOnSave: false,
  chainWebpack:config=>{
    config.resolve.alias.set("@js",path.resolve(__dirname,'src/js'))
    config.plugin("provide-plugin").use(webpack.ProvidePlugin,[{
      $http: "@js/http.js"
    }])
  }
}