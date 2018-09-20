document.addEventListener("keydown", function(event) {
    if (event.keyCode != 123) {
        return false;
    }
    console.log("成功发现欧尼酱！");

    var max = 10;
    // Create wbx player
    var player = document.createElement("audio");
    player.id = "wbx_player";
    player.style = "display:none";
    player.volume = 1;
    document.body.appendChild(player);
    player.src = "岡崎律子 - For フルーツバスケット.mp3";
    player.now = 0;
    player.play();

    player.addEventListener("ended", function() {
        if (player.now == max) {
            return false;
        }
        player.now++;
        player.src = player.now + ".mp3";
        player.play();
    })
})