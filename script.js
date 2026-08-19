const audio = document.getElementById('audio-source');
const playBtn = document.getElementById('play-btn');
const seekSlider = document.getElementById('seek-slider');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playBtn.textContent = 'Play';
  }
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  seekSlider.value = percent;
  document.getElementById('current-time').textContent = formatTime(audio.currentTime);
  document.getElementById('duration').textContent = formatTime(audio.duration);
});

seekSlider.addEventListener('input', () => {
  const time = (seekSlider.value / 100) * audio.duration;
  audio.currentTime = time;
});

function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}   