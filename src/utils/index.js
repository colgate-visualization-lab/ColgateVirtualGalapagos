export const formatTime = (duration) => {
  let seconds = Math.floor(duration % 60);
  let minutes = Math.floor(duration / 60);
  minutes = minutes > 9 ? minutes : `0${minutes}`;
  seconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${minutes}:${seconds}`;
};
