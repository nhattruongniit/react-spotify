import { Howl } from "howler";
console.log("squash commit");
console.log("top squash commit");
class PlayerService extends Howl {}

const playerService = new PlayerService({
  src: ["assets/music/Titanium.mp3"],
  html5: true,
  format: ["mp3"],
});

export default playerService;
