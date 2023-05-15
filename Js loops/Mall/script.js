var check = false;
function getVoucher(){
    var selectedVal = document.querySelector( 
        'input[name="range"]:checked').value;
    var amount = 0;
    if (check){
        amount += 100;
    }
    check = true;
    if (selectedVal == 5000){
        amount += 3000;
    }
    else if (selectedVal == 3000){
        amount += 1500;
    }
    else {
        amount += 500;
    }
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = "Congrats on recieving $"+amount;
}