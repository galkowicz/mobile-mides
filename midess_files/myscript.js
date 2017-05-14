$(document).ready(function () {
    $('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1,maximum-scale=1.0');

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // some code..
        window.location = "http://mides.co.il/";
    }

    function attachEvents() {

        $("#hebMenuButton").click(function () {
            $("#hebMenu").load("midess_files/hebrew-menu.html");
        });

        var burgerMenu = $(".burger-menu-icon");
        burgerMenu.click(function () {
            burgerMenu.toggleClass('menuClosed');
            burgerMenu.toggleClass('menuOpen');
        });
    }

    attachEvents();


});

