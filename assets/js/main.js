(function ($) {
  "use strict";

  $(function () {
    /* Play video */

    // $('.play-video a').fancybox();

    $(".play-video").click(function (e) {
      e.preventDefault();
      $(".video-poster").addClass("active");
      // $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });

    $(".close-button").click(function (e) {
      e.preventDefault();
      $(".youtube-video").each(function (index) {
        $(this).attr("src", $(this).attr("src"));
        return false;
      });
      $(".video-poster").removeClass("active");
    });

    const $poup = $(".youtube-video");
    $(document).mouseup((e) => {
      if (!$poup.is(e.target) && $poup.has(e.target).length === 0) {
        // ... nor a descendant of the container
        if ($("#video-poster").hasClass("active")) {
          $(".youtube-video").each(function (index) {
            $(this).attr("src", $(this).attr("src"));
            return false;
          });
          $(".video-poster").removeClass("active");
          $(".close-button").trigger("click");
        } else {
          console.log(2);
        }
      }
    });
  }); // end document ready
})(jQuery); // end JQuery namespace
