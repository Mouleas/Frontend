var check = false;
var discount = 0;
function getDiscount(){
    var day = document.getElementById("Days").value;
    var amount = document.getElementById("amount").value;
    console.log(amount);
    if (check){
        alert("Limit Exceeded!!!");
        document.getElementById("Message").innerHTML = "$"+(amount-(amount*(discount/100)));
        document.getElementById("Greet").style.display = "block";
    }
    else {
        check = true;
        switch (day) {
            case "Monday":
                discount = 15;
                break;
            case "Tuesday":
                discount = 10;
                break;
            case "Wednesday":
                discount = 12;
                break;
            case "Thursday":
                discount = 11;
                break;
            case "Friday":
                discount = 13;
                break;
            case "Saturday":
                discount = 14;
                break;
            case "Sunday":
                discount = 15;
                break;
            default:
                break;
        }
        document.getElementById("Message").innerHTML = "$"+(amount-(amount*(discount/100)));
        document.getElementById("Greet").style.display = "block";
    }
    
}