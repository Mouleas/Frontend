function getStatus(){
    var mark = document.getElementById("mark").value;
    var message = "";
    if (mark > 100 || mark < 0 || mark == ""){
        alert("Invalid Entry!!");
        location.reload();
    }
    if (mark > 90){
        message = "Outstanding to admit";
    }
    else if (mark > 70 && mark <= 90){
        message = "Good to admit";
    }
    else if (mark >= 50 && mark <= 70){
        message = "Acceptable to admit";
    }
    else {
        message = "Admission Application Rejected";
    }
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = message;
}