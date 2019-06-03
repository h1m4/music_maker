window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div"); /*pads 안의 모든 div*/
  const visual = document.querySelector(".visual");

  const colors = ["#60d395",
  "#d36060",
  "#fee141",
  "#c036fe",
  "#d3d160",
  "#84dfe2"];
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
