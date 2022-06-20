console.log("top commit")

export default function durationTime(sec: number) {
  // const format = (val: number) => `0${Math.floor(val)}`.slice(-2)
  // const hours = sec / 3600;
  const minutes = (sec % 3600) / 60;
  const seconds = Math.round(sec % 60);
  const fis: any = seconds < 10 ? `0${seconds}` : seconds
  return `${Math.round(minutes)}:${fis}`
}

