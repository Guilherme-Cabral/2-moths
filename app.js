document.addEventListener("mousemove", function(event) {
    var heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.color = "red";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    document.body.appendChild(heart);
    setTimeout(function() {
      heart.remove();
    }, 200);
  });
  
  