import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const player = new Vimeo('vimeo-player');
  const storageKey = 'videoplayer-current-time';
  let playbackStarted = false;

  const saveCurentTime = throttle(function () {
    player.getCurrentTime().then(function (currentTime) {
      localStorage.setItem(storageKey, currentTime);
    });
  }, 1000);

  player.on('timeupdate', saveCurentTime);

  const savedTime = localStorage.getItem(storageKey);

  if (savedTime) {
    player.setCurrentTime(savedTime);
  }

  const playButton = document.getElementById('playButton');
  if (playButton) {
    playButton.addEventListener('click', function () {
      if (!playbackStarted) {
        player.play();
        playbackStarted = true;
      }
    });
  }
});
