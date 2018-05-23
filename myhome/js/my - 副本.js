$(
    function () {
        backTop();
        backBottom();
    }
)



var speed = 300;

function backTop() {
    $("#myBtn_1").hide();
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top > 280) {
            $("#myBtn_1").fadeIn(1000);
        } else {
            $("#myBtn_1").fadeOut(1000);
        }
    });
    $("#myBtn_1").click(function (e) {

        $("body,html").animate({
            scrollTop: 0
        }, speed);

    });
}

function backBottom() {
    $("#myBtn_2").show();
    var windowHeight = parseInt($("#wrap").css("height")); //获取页面高度
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top > windowHeight) {
            $("#myBtn_2").fadeOut(1000);
        } else {
            $("#myBtn_2").fadeIn(1000);
        }
    });
    $("#myBtn_2").click(function (e) {
        $("body").animate({
            scrollTop: windowHeight
        }, speed);

    });
}