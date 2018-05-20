$(
    function () {
        backTop();
        backBottom();
    }
)

var speed = 300;
function backTop() {
    $("#myBtn_1").show();
    $("#myBtn_1").click(function (e) {
        $("body,html").animate({
            scrollTop: 0
        }, speed);
    });
}

function backBottom() {
    $("#myBtn_2").show();
    var windowHeight = $("#wrap").height(); //获取页面高度
    $("#myBtn_2").click(function (e) {
        $("body").animate({
            scrollTop: windowHeight
        }, speed);
    });
}