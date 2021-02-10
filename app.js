let a;
let date;
let time, h, m, s;
var ampm;

setInterval(() => {
    a = new Date();
    h = a.getHours();
    m = a.getMinutes();
    s = a.getSeconds();
    ampm = h >= 12 ? 'PM' : 'AM';

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    time = h + ':' + m +  ':' + s + ' ' + ampm;

    document.getElementById('clocks').innerHTML = time;

}, 1000);