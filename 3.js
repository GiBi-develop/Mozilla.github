function plus(){
    var result;
    var Num1 = document.getElementById('n1').value;
    var Num2 = document.getElementById('n2').value;
    
    Num1 = parseInt(Num1);
    Num2 = parseInt(Num2);
    
    result = Num1 + Num2;
    document.getElementById('out').innerHTML = result;
}

function sub(){
    var result;
    var Num1 = document.getElementById('n1').value;
    var Num2 = document.getElementById('n2').value;
    
    Num1 = parseInt(Num1);
    Num2 = parseInt(Num2);
    
    result = Num1 - Num2;
    document.getElementById('out').innerHTML = result;
}