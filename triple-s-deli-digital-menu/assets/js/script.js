function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

$(document).ready(function() {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 381,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


$(document).ready(function() {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Back to Top Button
 
 jQuery(document).ready(function($) {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    $(window).scroll(function () {
        updateProgress();
        if ($(this).scrollTop() > 50) {
            $('.progress-wrap').addClass('active-progress');
        } else {
            $('.progress-wrap').removeClass('active-progress');
        }
    });

    $('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 550);
        return false;
    });
});

