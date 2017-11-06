var $ = require('jquery')
var _ = require('underscore')

$(function () {
    $('#demo').html(_.max([1,2,3,4,2,3,1]))
})