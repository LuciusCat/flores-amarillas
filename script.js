onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.getElementById("playButton").addEventListener("click", function () {
  const audio = document.getElementById("backgroundAudio");
  audio.play();
});
