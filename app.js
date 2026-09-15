/**
 * Aura & Cadence — app.js
 * Simple Background Audio Player
 */

const audio = document.getElementById("audio-element");
const playBtn = document.getElementById("mini-btn-play");
const playIcon = document.getElementById("mini-play-icon");
const playerCover = document.getElementById("mini-player-cover");
const waveBars = document.querySelectorAll("#mini-wave span");

function togglePlay() {
  if (!audio) return;
  if (audio.paused) {
    audio.play().catch(e => console.warn("Auto-play blocked:", e));
  } else {
    audio.pause();
  }
}

function updatePlayState() {
  if (!audio) return;
  const isPlaying = !audio.paused;

  if (playIcon) {
    playIcon.textContent = isPlaying ? "pause" : "play_arrow";
  }

  if (playerCover) {
    playerCover.style.animationPlayState = isPlaying ? "running" : "paused";
  }

  waveBars.forEach(bar => {
    if (isPlaying) {
      bar.classList.remove("wave-paused");
    } else {
      bar.classList.add("wave-paused");
    }
  });
}

if (playBtn) {
  playBtn.addEventListener("click", togglePlay);
}

if (audio) {
  audio.addEventListener("play", updatePlayState);
  audio.addEventListener("pause", updatePlayState);
}

// Init
updatePlayState();
