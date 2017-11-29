/**
 * Created by DELL- on 2017/11/28.
 */
const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isPro ? 'http://www.onlyconfig.com/api/' : 'api/'
}
