
function raftingpackage(){
    let name=document.getElementById("name-1").value;
    var number=document.getElementById("ph_no_1").value;
    if(name,number == ""){
       alert("fill the given details");
       return 0;
    }
    var peoples=document.getElementById("peoples-1").value;
    var checkin=document.getElementById("checkin-1").value;
    var checkout=document.getElementById("checkout-1").value;
    // var decor=document.getElementById("decor");
    var watsappurl="https://wa.me/919024860746?text="+
       "       Rafting Package"+"%0a"+
       "name of customer:- "+name+"%0a"+
    "mobile number:- "+number+
    "%0a"+"number of people:-"+peoples+"%0a"+"check in date:-"+checkin+"%0a"+
    "check out date:- "+checkout;

    window.open(watsappurl,"_blank").focus();}