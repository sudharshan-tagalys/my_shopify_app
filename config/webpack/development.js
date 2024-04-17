process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
console.log(environment.toWebpackConfig().mode)
module.exports = environment.toWebpackConfig()
