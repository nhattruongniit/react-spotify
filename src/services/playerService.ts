import { Howl } from "howler";
class PlayerService extends Howl {}


console.log('132')

const playerService = new PlayerService({
  src: ["assets/music/Titanium.mp3"],
  html5: true,
  format: ["mp3"],
});

export default playerService;
