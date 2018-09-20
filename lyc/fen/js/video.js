document.addEventListener("keydown", function(event) {
    if (event.keyCode != 123) {
        return false;
    }
    console.log("成功发现F12！");
    console.log("别装B！");
    var one_baseurl = "https://audio.wbxcdn2.com/Tips/";
    var max = 10;
    // Create wbx player
    var player = document.createElement("audio");
    player.id = "wbx_player";
    player.style = "display:none";
    player.volume = 1;
    document.body.appendChild(player);
    player.src = "https://static01.wbxcdn2.com/audio/Tips.mp3";
    player.now = 0;
    player.play();

    player.addEventListener("ended", function() {
        if (player.now == max) {
            return false;
        }
        player.now++;
        player.src = one_baseurl + player.now + ".mp3";
        player.play();
    })
})

document.addEventListener("keydown", function(event) {
if (event.keyCode != 119) {
    return false;
}
console.log("成功发现F8！");
console.log("小萝莉~ 233");
var two_baseurl = "https://audio.wbxcdn2.com/Tips/";
var maxtwo = 1;
var player = document.createElement("audio");
player.id = "wbx_player";
player.style = "display:none";
player.volume = 1;
document.body.appendChild(player);
player.src = "https://static01.wbxcdn2.com/audio/loli.mp3";
player.now = 0;
player.play();

    player.addEventListener("ended", function() {
        if (player.now == maxtwo) {
            return false;
        }
        player.now++;
        player.src = two_baseurl + "loli2" + ".mp3";
        player.play();
    })
})

document.addEventListener("keydown", function(event) {
    if (event.keyCode != 120) {
        return false;
    }
    console.log("成功发现F9！");
    console.log("Niconiconi!");
    var player = document.createElement("audio");
    player.id = "wbx_player";
    player.style = "display:none";
    player.volume = 1;
    document.body.appendChild(player);
    player.src = "https://audio.wbxcdn2.com/Tips/nico.mp3";
    player.now = 0;
    player.play();
})

console.log("按F12和F8和F9有惊喜哦！");
console.log("By wbx");
console.log("")