(function(window) {

    if(window.location.pathname.indexOf("projects") > -1) {
        $(".projects").show();
    }
    $(".trigger").bind("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });

})(window);
