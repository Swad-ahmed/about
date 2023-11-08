function oPen() {
  document.getElementById("navvv").style.height = "100%";
  document.getElementById("a").style.left = "-200px"
}

function cLose() {
  document.getElementById("navvv").style.height = "0%";
  document.getElementById("a").style.left = "0px"
}

function Light() {
  document.body.style.backgroundColor = "rgb(255, 255, 255"
  document.getElementById("h").style.color = "rgb(0, 0, 0)"
  document.getElementById("h0").style.color = "rgb(0, 0, 0)"
  document.getElementById("a").style.color = "rgb(0, 0, 0)"
  document.getElementById('i').display = "none"
  document.getElementById('ii').style.display = "block"
}

function Dark(){
  document.body.style.backgroundColor = "rgb(0, 0, 0)"
  document.getElementById("h").style.color = "rgb(255, 255, 255)"
  document.getElementById("h0").style.color = "rgb(255, 255, 255)"
  document.getElementById("a").style.color = "rgb(255, 255, 255)"
  document.getElementById('i').style.display = "block"
  document.getElementById('ii').style.display = "none"
}