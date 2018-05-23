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

$(function(){
		var time = new Date();
		var year = time.getFullYear();
		var month = time.getMonth();
		var day = time.getDate();
		var d = time.getDay();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds();
		var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		
		var timeStr = (year)+"年"+(month+1)+"月"+day+"日   "+week[d];
		
		document.getElementById("time").innerHTML = timeStr;

})

