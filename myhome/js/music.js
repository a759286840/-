
window.onload = function () {
    // 歌曲列表
    var music = [{
            id: 1,
            name: "RADWIMPS - Shape Of Miracle"
        },
        {
            id: 2,
            name: "RADWIMPS - Mountain Top"
        },
        {
            id: 3,
            name: "chengdu"
        },
        {
            id: 4,
            name: "李玉刚 - 刚好遇见你"
        }
    ]
    // 记录当前是哪首歌曲
    var currentMusic = 0;
    // 获取DOM
    var oVideo1 = document.querySelector("#video1");
    // 初始化
    oVideo1.src =  music[0].name + '.mp3';

    // 歌曲结束事件
    oVideo1.onended = function () {
        currentMusic += 1;
        // 判断是否是最后一首
        if (currentMusic === music.length) {
            currentMusic = 0;
        }
        var sr =  music[currentMusic].name + '.mp3';
        this.src = sr;
    }

    // 获取左边歌曲列表的DOM
    var aList = document.getElementsByClassName("music-name");
    for (var i = 0; i < aList.length; i++) {
        // 为了知道具体是那一个li
        aList[i].index = i;
        // 给每一个li设定一个事件
        aList[i].onclick = function () {
            oVideo1.src =  music[this.index].name + ".mp3";
        }
    }
}
    