function sumbitForm(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var idNumber = document.getElementById("idNumber").value;  
    var gradeAndSection = document.getElementById("gradeAndSection").value;
    var age = document.getElementById("age").value;    
    var email = document.getElementById("email").value;
    
    document.getElementById("end").innerHTML = "Student Details" + 
    "<br>=======================" +
    "<br> Name: " + name + 
    "<br>ID Number: " + idNumber + 
    "<br>Grade and Section: " + gradeAndSection +
    "<br>Age: " + age + 
    "<br>Email: " + email;
    
}