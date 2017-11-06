var $ = require('jquery')
var Paging = require('paging')

var html = Paging.render({
    currentPage: 2,
    pageCount: 10
})
$(function () {
    $('body').append(html)
})