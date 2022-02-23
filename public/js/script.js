let before_loadtime = new Date().getTime();

window.onload = Pageloadtime;
function Pageloadtime() {
    let aftr_loadtime = new Date().getTime();
    let pgloadtime = (aftr_loadtime - before_loadtime) / 1000
    let par = document.createElement("p");
    let text = document.createTextNode(' Load time: '+pgloadtime+' s');
    par.appendChild(text);
    let element = document.getElementsByTagName("footer");
    element[0].appendChild(par);
}