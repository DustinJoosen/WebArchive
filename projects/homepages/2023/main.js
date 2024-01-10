
$(document).ready(function() {

    // Auto-write texts
    $(".autowrite").each(function(i, elem) {
        let content = $(elem).attr("content");

        setTimeout(function() {
            let c = 0;
            let thread = setInterval(function() {
                $(elem).append(content[c++]);

                if (c == content.length) {
                    clearInterval(thread);
                }

            }, 120);
        }, 400);

    });

    let flipped = false;
    // Hidden images
    $("#bubble-red").on("click", function() {
        if (flipped) {
            return;
        }

        $(this).animate({
            width: "+=1px",
        }, {
            step: function() {
                $(this).css({'transform': 'rotateY(90deg)', 'transition': '0.5s'})
            },
            easing: "linear",
            complete: function() {
                $(this).animate({
                    width: "-=1px",
                }, {
                    step: function() {
                        let path = "lib/img/hidden.jpeg";
                        $(this).html("<img src='" + path + "' />");
                        $(this).css({'transform': 'rotateY(0deg)', 'transition': '0.8s'})
                        flipped = true;
                    }
                });
            }
        });
    })

    // Toggling main links
    $("#toggle-main-links").on("click", function() {
        $(".main-links").toggleClass("active");
        $("#toggle-main-links").html($(".main-links").hasClass("active") ? "<-" : "->");
    })

})