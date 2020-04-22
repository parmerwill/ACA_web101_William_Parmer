function toggle (){
  var Number = document.getElementById("no")
  if (Number.classList.contains("num")){
    Number.classList.remove("num")
  }
  else {
    Number.classList.add("num")
  }
}