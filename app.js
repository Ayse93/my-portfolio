const kate = document.querySelector("#click");
kate.addEventListener("click", function() {
alert ("Submitted");
});

console.log(kate);

const kate1 = document.querySelector("#click1");
kate1.addEventListener("click", function ()  {
    document.getElementById("contact").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    alert ("Cleared");
});

console.log(kate1);

const kate2 = document.querySelector(".cont").children[0][2];
document.getElementById("click").onclick = function() {
    var textarea = document.getElementById("contact");
    alert(textarea.value);
  }

console.log(kate2);


