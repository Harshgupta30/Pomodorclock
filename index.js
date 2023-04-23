var seconds = 0, ss = 0, mm = 0, myinterval, breakinterval, Session = 0, k, n;
const time = document.getElementById("cen");
const b1 = document.getElementById("start");
const s = document.getElementById("p1");
const b = document.getElementById("p2");
const ses = document.getElementById("ses")
const but = document.getElementsByClassName("b");
mm = s.innerText;
k = s.innerText;
n = b.innerText;

function stinc() {
    time.setAttribute("class","cen");
    k = parseInt(s.innerText) + 1;
    s.innerText = k;
    // k = s.innerText;
    if (k < 10) {
        k = "0" + parseInt(k);
    }
    time.innerText = k + ":00";
}
function stdec() {
    time.setAttribute("class","cen");
    if (parseInt(s.innerText) > 0) {
        k = parseInt(s.innerText) - 1;
        s.innerText = k;
        // k = s.innerText;
        if (k < 10) {
            k = "0" + parseInt(k);
        }
        time.innerText = k + ":00";
    }

}
function btinc() {
    // time.setAttribute("class","brk");
    n = parseInt(b.innerText) + 1;
    b.innerText = n;
}
function btdec() {
    // time.setAttribute("class","brk");
    if (parseInt(b.innerText) > 0) {
        n = parseInt(b.innerText) - 1;
        b.innerText = n;
    }
}
function breakinter(){
    breakinterval = setInterval(function(){
        if(ss == 0 && mm==0){
            start();
        }
        if (ss == 0 && mm > 0) {
            ss = 59;
            mm = mm - 1;
        }
        else{
            ss = parseInt(ss)-1;
        }
        if (ss < 10) {
            ss = "0" + ss;
        }
        if (mm < 10) {
            mm = "0" + parseInt(mm);
        }
        time.innerText = mm + ":" + ss;
    },1000)
    b1.setAttribute("onclick", "pause1()");
    b1.innerText = "Pause";
}

function brak(){
    clearInterval(myinterval)
    for (let i = 0; i < but.length; i++) {
        but[i].setAttribute("disabled", "true");
    }
    if(b.innerText>0){
        ses.innerText = "Break!";
        for (let i = 0; i < but.length; i++) {
            but[i].setAttribute("disabled", "true");
        }
        mm = b.innerText;
        time.setAttribute("class","brk");
        breakinter();
    }
    else{
        if(s.innerText>0){
           start(); 
        }
        
    }
    
}
function myinter(){
    myinterval = setInterval(function(){
        if(ss == 0 && mm==0){
            brak();
        }
        if (ss == 0 && mm > 0) {
            ss = 59;
            mm = mm - 1;
        }
        else{
            ss = parseInt(ss)-1;
        }
        if (ss < 10) {
            ss = "0" + ss;
        }
        if (mm < 10) {
            mm = "0" + parseInt(mm);
        }
        time.innerText = mm + ":" + ss;
    },1000)
    b1.setAttribute("onclick", "pause()");
    b1.innerText = "Pause";
}
function start(){
    if(s.innerText>0){
        time.setAttribute("class","cen");
        for (let i = 0; i < but.length; i++) {
            but[i].setAttribute("disabled", "true");
        }
        Session = Session + 1;
        ses.innerText = "Session " + Session;
        mm = s.innerText;
        myinter()        
    }
    else{
        console.log("false")
        if(b.innerText>0){
            brak();
            b1.setAttribute("onclick", "pause1()");
            b1.innerText = "Pause";
        }
        else{
            alert("Plese set timer");
        }
        
    }
}


// time.innerText = k + ":00";
function reset() {
    clearInterval(myinterval);
    clearInterval(breakinterval);
    time.setAttribute("class","cen");
    ss = 0, mm = 0;
    for (let i = 0; i < but.length; i++) {
        // but[i].setAttribute("disabled","false");
        but[i].disabled = false;
        // console.log(but[i]);
    }
    if (k < 10) {
        k = "0" + parseInt(k);
    }
    time.innerText = k + ":00";
    // time.innerText = "00:00";
    Session = 0;
    ses.innerText = "Session " + Session;

    seconds = 0;
    b1.setAttribute("onclick", "start()");
    b1.innerText = "Start";
}
function pause() {
    clearInterval(myinterval);
    clearInterval(breakinterval);
    // for (let i = 0; i < but.length; i++) {
    //     // but[i].setAttribute("disabled","false");
    //     but[i].disabled = false;
    //     // console.log(but[i]);
    // }
    b1.setAttribute("onclick", "myinter()");
    b1.innerText = "Start";
}

function pause1() {
    clearInterval(myinterval);
    clearInterval(breakinterval);
    for (let i = 0; i < but.length; i++) {
        // but[i].setAttribute("disabled","false");
        but[i].disabled = false;
        // console.log(but[i]);
    }
    b1.setAttribute("onclick", "breakinter()");
    b1.innerText = "Start";
}
