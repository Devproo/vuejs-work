const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
})
const vetur = require('@volar-plugins/vetur')

module.exports = {
  plugins: [vetur()],
}