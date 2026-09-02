function submitForm(){

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var favoriteSubject = document.getElementById("favoriteSubject").value;
    document.getElementById("output").innerHTML = "Hello <b>" + name + "</b> you are <b>" + age + "</b> and you like <b>" + favoriteSubject + "</b>";
    console.log(name, age, favorateSubject);
}