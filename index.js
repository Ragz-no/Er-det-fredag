function Fredag() {
    let dag = new Date();
    let answer = document.getElementById("svar");
    let gif = document.createElement("img");
    
    if (dag.getDay() == 5) {
        answer.innerHTML = "JA!!!";
        answer.className = "yesh";
        gif.src = "https://media2.giphy.com/media/lyq3LcSnaUND5jXcrv/giphy.gif?cid=27369a91957681516f1dd271242c44c001d9e34a21812faf&rid=giphy.gif&ct=g";
        document.body.appendChild(gif);
    } else {
        answer.innerHTML = "Nei";
        answer.className = "nesh";
        gif.src ="https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif";
        document.body.appendChild(gif);
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('klokke').innerHTML = "Klokken er nå " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}







