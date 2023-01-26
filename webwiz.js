var color = ["white", "orange", "gray", "blue"];
var i = 0;
document.querySelector("button.BG").addEventListener("click", function () {
    i = i < (color.length-1) ? ++i : 0;
    document.querySelector("body").style.background = color[i]
})
var x
document.querySelector("button.welcome").addEventListener("click", function () {
    var x;
    x = prompt("what's your name");
    alert("Welcome" + " " + x);

})
document.querySelector("button.header").addEventListener("click", function () {
    setTimeout(function () {
        var words = ["TASK OF WEBWIZ", "WEBWIZ", "TASK", "WEBSITE", "WEBWIZ TASK"];
        n = 0;
        i = i < (words.length - 1) ? ++i : 0;
        document.querySelector('h1').innerText = words[i]
    }, 5000);
})
