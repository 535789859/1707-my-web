require.ensure([], function(require) {
    var b = require('./b')
    console.log(b)
});

module.exports = {
    a:1
}
