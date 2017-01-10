/* global $ */
/* global jQuery */
$(document).ready(function() {
    $(".like").each(function() {
        var like = this;
        $("button", like).click(function() {
            var liked = jQuery.data(like, "liked") || false;
            $("p", like).html(liked ? "" : "You like this project!");
            jQuery.data(like, "liked", !liked);
        });
    });
});