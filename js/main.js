function hasClassName(inElement, inClassName) {
  var regExp = new RegExp("(?:^|\\s+)" + inClassName + "(?:\\s+|$)");
  return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName) {
  if (!hasClassName(inElement, inClassName))
    inElement.className = [inElement.className, inClassName].join(" ");
}

function removeClassName(inElement, inClassName) {
  if (hasClassName(inElement, inClassName)) {
    var regExp = new RegExp("(?:^|\\s+)" + inClassName + "(?:\\s+|$)", "g");
    var curClasses = inElement.className;
    inElement.className = curClasses.replace(regExp, " ");
  }
}

function toggleClassName(inElement, inClassName) {
  if (hasClassName(inElement, inClassName))
    removeClassName(inElement, inClassName);
  else addClassName(inElement, inClassName);
}

function toggleShape() {
  var shape = document.getElementById("shape");
  if (hasClassName(shape, "ring")) {
    removeClassName(shape, "ring");
    addClassName(shape, "cube");
  } else {
    removeClassName(shape, "cube");
    addClassName(shape, "ring");
  }

  var stage = document.getElementById("stage");
  if (hasClassName(shape, "ring"))
    stage.style.webkitTransform = "translateZ(-200px)";
  else stage.style.webkitTransform = "";
}

var message = "(。･ω･｡)ﾉ♡ ❤️️ Hồ Hoài Thương ❤️️ ★~(◠‿◕✿)";

function step() {
  message = message.substr(1) + message.substr(0, 1);
  document.title = message.substr(0, 15);
}

window.onload = function(){
	var audio = document.getElementsByTagName("audio");
	audio[0].play();
}
