function slide(){
	$("#div1").fadeToggle();
}
function thing(){
	$("#p").css("font-size", "40px");
}
function thing2(){
	var missing = [];
	if ($("#name").val() == "")
		missing.push("name, ")
	if ($("#email").val() == "")
		missing.push("email, ")
	if (missing.length == 0){
		$("#error").html("Success!")
	} else {
		$("#error").html("you are missing: " + missing)
	}
	$("#error").css("color","red")
}
 
function myFunction() {
   var person = prompt("Please enter your name", "Nobody");
   if (person != null) {
     document.getElementById("demo").innerHTML =
     "Welcome " + person + ", to this website thing";
  }  
}