(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const progressBar = document.getElementById("progressBar");
  const counter = document.getElementById("counter");
  const total = slides.length;
  let current = 0;

  function clamp(i) {
    return Math.min(Math.max(i, 0), total - 1);
  }

  function show(i) {
    current = clamp(i);
    slides.forEach((s, idx) => s.classList.toggle("active", idx === current));
    progressBar.style.width = ((current + 1) / total) * 100 + "%";
    counter.textContent = (current + 1) + " / " + total;
    history.replaceState(null, "", "#" + (current + 1));
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  window.addEventListener("keydown", (e) => {
    if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(e.key)) {
      e.preventDefault();
      next();
    } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      show(0);
    } else if (e.key === "End") {
      show(total - 1);
    } else if (e.key === "f" || e.key === "F") {
      toggleFullscreen();
    }
  });

  document.getElementById("deck").addEventListener("click", (e) => {
    const x = e.clientX / window.innerWidth;
    if (x < 0.25) prev();
    else if (x > 0.75) next();
  });

  let touchStartX = null;
  window.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; });
  window.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchStartX = null;
  });

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  const hash = parseInt(location.hash.replace("#", ""), 10);
  show(!isNaN(hash) && hash >= 1 && hash <= total ? hash - 1 : 0);
})();
