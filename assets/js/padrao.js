/* global $, Shiyori, isMobile */

var $posts = $('#posts')

$(document).ready(function () {
  $('.menu-responsive').on('click', function () {
    $('.menu-list').slideToggle()

    return false
  })

  if (Shiyori.GRID && Shiyori.INDEX && !isMobile.phone) {
    var $msnry = $posts.masonry({
      itemSelector: '.post',
      gutter: 20,
      transitionDuration: 0,
      isFitWidth: true
    })

    $msnry.imagesLoaded().progress(function () {
      $msnry.masonry()
    })
  }

  if (Shiyori.ENDLESS_SCROLLING && Shiyori.INDEX) {
    $posts.infinitescroll({
      contentSelector: '#posts',
      navSelector: '#pager',
      nextSelector: '.pager-next',
      itemSelector: '.post',
      loading: {
        img: 'http://static.tumblr.com/0nxdyrj/2Iencdxei/loading.gif',
        finishedMsg: Shiyori.ENDLESS_SCROLLING_FINISHED,
        msgText: Shiyori.ENDLESS_SCROLLING_LOADING
      }
    }, function (new_elements) {
      if (Shiyori.GRID && !isMobile.phone) {
        var $new_elements = $(new_elements)

        $new_elements.each(function () {
          var el = $(this)

          $msnry
            .masonry()
            .append(el)
            .masonry('appended', el)
            .imagesLoaded().progress(function () {
              $msnry.masonry()
            })
        })
      }
    })
  }

  $(window).on('resize', function () {
    if (Shiyori.GRID && Shiyori.INDEX && !isMobile.phone) {
      $msnry.masonry()
    }

    if (window.innerWidth >= 1024) {
      $('.menu-list').removeAttr('style')
    }
  })
})
