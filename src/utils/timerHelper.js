export const convertTimeToMinutesAndSeconds = (time) => {
  const m = Math.floor(time / 60);
  const s = time % 60;

  return `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
}