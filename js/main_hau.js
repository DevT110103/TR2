$(document).ready(function () {
  var showChar = 1000
  var ellipsestext = '...'
  var moretext = 'Xem tiếp'
  var lesstext = 'Thu gọn'

  $('.more').each(function () {
    var content = $(this).html()
    if (content.length > showChar) {
      var c = content.substr(0, showChar)
      var h = content.substr(showChar, content.length - showChar)

      var html =
        c +
        '<span class="moreellipses">' +
        ellipsestext +
        '&nbsp;</span><span class="morecontent m-auto"><span>' +
        h +
        '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
        moretext +
        '</a></span>'
      console.log('html', html)

      $(this).html(html)
    }
  })

  $('.morelink').click(function () {
    if ($(this).hasClass('less')) {
      $('.more').addClass('more2')
      $('.more').removeClass('less')
      $(this).removeClass('less')
      $(this).html(moretext)
    } else {
      $(this).addClass('less')
      $('.more').addClass('less')
      $('.more').removeClass('more2')
      $(this).html(lesstext)
    }
    $(this).parent().prev().toggle()
    $(this).prev().toggle()
    return false
  })

  var root = document.querySelector(':root')

  var scaleFont = 0

  $('#font-down').click(function () {
    root.style.setProperty('--scale-font', (scaleFont = scaleFont - 2) + 'px')
  })

  $('#font-up').click(function () {
    root.style.setProperty('--scale-font', (scaleFont = scaleFont + 2) + 'px')
  })

  $('#font-reset').click(function () {
    root.style.setProperty('--scale-font', (scaleFont = 0) + 'px')
  })

  $('.form-cancel').click(function () {
    $(this).closest('.form-content').find('input').val('')
    $(this).closest('.form-content').find('textarea').val('')
  })

  $('.form-select-item').click(function (e) {
    const dataSelect = $(this).attr('value')

    $(this)
      .closest('.wrapper-search-input')
      .find('.search-input')
      .attr('value', dataSelect)
  })

  $('.search-input').click(function () {
    $('.wrapper-form-select').slideToggle()
  })
  $('.form-select').click(function () {})
})
