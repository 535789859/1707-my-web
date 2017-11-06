var $ = require('jquery')
var Paging = require('paging')

var html = Paging.render({
    currentPage: 1,
    pageCount: 10
})
$(function () {
    $('body').append(html)
})