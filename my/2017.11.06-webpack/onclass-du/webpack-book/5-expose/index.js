// var $ = require('!expose?jQuery!expose?$!jquery')
var $ = require('jquery')
require('./formdata')
$(function () {
    console.log(
        JSON.stringify($('form').formdata())
    )
})