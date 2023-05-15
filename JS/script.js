function getAB(){
    let A = document.getElementById("A").value;
    let B = document.getElementById("B").value;
    if (A == "" || B == ""){
        alert("Enter both values");
    }
    else {
        return [A,B];
    }
    
}

function add(){
    let [A,B] = getAB();
    A = parseInt(A);
    B = parseInt(B);
    document.getElementById("ans").innerHTML = 'The Ans is: '+ (A+B);
}

function sub(){
    let [A,B] = getAB();
    A = parseInt(A);
    B = parseInt(B);
    document.getElementById("ans").innerHTML = 'The Ans is: '+ (A-B);
}

function mul(){
    let [A,B] = getAB();
    A = parseInt(A);
    B = parseInt(B);
    document.getElementById("ans").innerHTML = 'The Ans is: '+ (A*B);
}

function div(){
    let [A,B] = getAB();
    A = parseInt(A);
    B = parseInt(B);
    document.getElementById("ans").innerHTML = 'The Ans is: '+ (A/B);
}

function mod(){
    let [A,B] = getAB();
    A = parseInt(A);
    B = parseInt(B);
    document.getElementById("ans").innerHTML = 'The Ans is: '+ (A%B);
}

function dequal(){
    let [A,B] = getAB();
    A = parseInt(A);
    B = parseInt(B);
    document.getElementById("ans").innerHTML = 'The Ans is: '+ (A==B);
}

function tequal(){
    let [A,B] = getAB();
    A = parseInt(A);
    B = parseInt(B);
    document.getElementById("ans").innerHTML = 'The Ans is: '+ (A===B);
}