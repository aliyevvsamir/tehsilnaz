//back to top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(() => {

/* Slick slide */

    $(".slick-slider").slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },

            {
              breakpoint: 778,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],

    });

    $(".slider-nav").slick({
        slidesToShow:3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },

          {
            breakpoint: 778,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],

    })

    /* Search button */

    $(".close-button").hide();
    $(".search-block").hide();

  

    $(".search-button").click(function (){
        $(".search-block").show()
        $(".close-button").show()
        $(".search-button").hide()
    });
    $(".close-button").click(function A () {
        $(".search-block").hide()
        $(".search-button").show()
        $(".close-button").hide()
    })


})

/* Date */
const arr = [1,2,3,4,5,6,7,8,9,]
function formatDate(date) {
    console.log(date,"datw");
    var monthNames = [
        "Yanvar", "Fevral", "Mart",
        "Aprel", "May", "İyun", "İyul",
        "Avqust", "Sentyabr", "Oktyabr",
        "Noyabr", "Dekabr"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
// console.log(typeof minute);
    for (const item of arr) {
        if (item === minute) {
                minute = "0"  + minute
        }
    }
    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' , ' + hour + ':' + minute;
}

document.getElementById("time").innerHTML = formatDate(new Date());


/* Statics */
var counter = parseInt(localStorage.getItem("pageViews")) || 0;
counter++;
console.log(counter);


$(".mainnav div").click(function() {
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
  $(".mainnav .on").toggleClass("on");
});
$(".hasDD").click(function(e) {
  $(this)
    .find("> ul")
    .slideToggle();
  $(this)
    .find("> ul ul")
    .css("display", "none");
  $(this)
    .find("> ul li")
    .removeClass("on");
  $(this).toggleClass("on");
  e.stopPropagation();
});


/* Navbar start */

        window.addEventListener("resize", function () {
            "use strict"; window.location.reload();
        });
        document.addEventListener("DOMContentLoaded", function () {
            /////// Prevent closing from click inside dropdown
            document.querySelectorAll('.dropdown-menu').forEach(function (element) {
                element.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            })
            // make it as accordion for smaller screens
            if (window.innerWidth < 992) {
                // close all inner dropdowns when parent is closed
                document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
                    everydropdown.addEventListener('hidden.bs.dropdown', function () {
                        // after dropdown is hidden, then find all submenus
                        this.querySelectorAll('.submenu')
                            .forEach(function (everysubmenu) {
                                // hide every submenu as well
                                everysubmenu
                                    .style
                                    .display =
                                    'none';
                            });
                    })
                });
                document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
                    element.addEventListener('click', function (e) {
                        let nextEl = this.nextElementSibling;
                        if (nextEl && nextEl.classList
                            .contains('submenu')) {
                            // prevent opening link if link needs to open dropdown
                            e.preventDefault();
                            console.log(nextEl);
                            if (nextEl.style.display ==
                                'block') {
                                nextEl.style.display =
                                    'none';
                            }
                            else {
                                nextEl.style.display =
                                    'block';
                            }
                        }
                    });
                })
            }
        });
         /* Navbar end */

