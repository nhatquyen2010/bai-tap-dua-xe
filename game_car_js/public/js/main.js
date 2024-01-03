var isstart
function start() {
  let domGreenLight = document.getElementById("red-light");
  let domYellowLight = document.getElementById("yellow-light");
  let domRedLight = document.getElementById("green-light");

  //   domGreenLight.style.backgroundColor = "#10b519";
  //   domYellowLight.style.backgroundColor = "#f7f411";
  //   domRedLight.style.backgroundColor = "#a83232";
  //   // domCar2.style.marginLeft = '1220px'
  setTimeout(function () {
    domRedLight.style.backgroundColor = "Red";
  }, 1000);
  setTimeout(function () {
    domYellowLight.style.backgroundColor = "Yellow";
  }, 2000);
  setTimeout(function () {
    domGreenLight.style.backgroundColor = "Green";
    // Play sound effect for car 1
    var car1Sound = document.getElementById("car1Sound");
    car1Sound.play();

    // Play sound effect for car 2
    var car2Sound = document.getElementById("car2Sound");
    car2Sound.play();
  }, 3000);
}


var positionCar1 = 0;
var positionCar2 = 0;
var x1 = 100;
var x2 = 100;
document.getElementById("xang1");
document.getElementById("xang2");
document.addEventListener("keydown", function (event) {
  domCar1 = document.getElementById("car1");
  domCar2 = document.getElementById("car2");
  console.log(event.key);
  switch (event.key) {
    case "ArrowRight":
      positionCar1 += 10;
      domCar1.style.marginLeft = positionCar1 + "px";
      x1 -= 1;
      xang1.style.width = x1 + "px";
      break;
    case "d":
      positionCar2 += 10;
      domCar2.style.marginLeft = positionCar2 + "px";
      x2 -= 1;
      xang2.style.width = x2 + "px";
      break;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector('.btn-dark');
  startButton.addEventListener('click', function () {
    var car1Sound = document.getElementById("car1Sound");
    car1Sound.play();

    var car2Sound = document.getElementById("car2Sound");
    car2Sound.play();

    start();
  });
});
setTimeout(start, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const chuElement = document.querySelector(".b1");

  setTimeout(function () {
    b1Element.style.visibility = "visible";
  },
    2000); 
});
