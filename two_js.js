/**
 * Created by Austin on 3/28/2017.
 */


    // referenced https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_click

$(document).ready(function() {
    $("#right h1").click(function () {
        $(this).hide();

        });
    });


$(document).ready(function() {
    $("bcircle").mouseenter(function () {
        $(this).hide();

    });
});

$(document).ready(function() {
    $("bcircle").mouseenter(function () {
        $(this).show();
    });
});
