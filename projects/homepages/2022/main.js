var DO_HOMEPAGE_SIGN_ANIMATION = true;
var SCHOOL_LINKS_JSON_URL = "https://api.npoint.io/16f244e1cafeaea71cb6";

var showing_extra_links = false;

$(document).ready(function() {

    $(".homepage-sign").on("mouseover", function() {
        // Only do the animation if DO_HOMEPAGE_SIGN_ANIMATION is set to true.
        if (!DO_HOMEPAGE_SIGN_ANIMATION) {
            return;
        }

        // If the homepage sign doesn't have the keyframe, apply it.
        // Then after 2 seconds, remove it.
        if (!($(this).hasClass("keyframe-homepage-flip"))) {
            $(this).addClass("keyframe-homepage-flip");
            setTimeout(function() {
                $(".homepage-sign").removeClass("keyframe-homepage-flip");
            }, 2000);
        }
    });


    fetch(SCHOOL_LINKS_JSON_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            // some data validation do
            for (var i = 0; i < data.length; i++) {
                var markup = "<li><a href='" + data[i]["url"] + "' target='_blank'>" + data[i]["name"] + "</a></li>";
                $(".extra-links-body-ul").append(markup);
            }
        });

});

function toggleExtraLinks() {
    showing_extra_links = !showing_extra_links;

    if (showing_extra_links) {
        $(".extra-links").css("opacity", "0.98");
        $(".extra-links").css("z-index", "100");
    }
    else {
        $(".extra-links").css("opacity", "0");
        $(".extra-links").css("z-index", "-100");
    }
}