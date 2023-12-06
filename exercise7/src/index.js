// because foldback is a js file, we could actually import it
// however we only need the path to the file (similar to importing audio files)
// vite allows us to do this with ?url behind the path
import workletURL from "./foldback.js?url";
import kickPath from "../../assets/kick.wav";

import "zyklus";

const ctx = new AudioContext();
document.addEventListener("click", () => {
  ctx.resume();
});

const slider = document.querySelector("#threshold-slider");

// AudioWorklet effect
await ctx.audioWorklet.addModule(workletURL); // top-level await, will block everything but we accept that
const foldbackDist = new AudioWorkletNode(ctx, "foldback-distortion-processor");
foldbackDist.connect(ctx.destination);
// setting parameters on a AudioWorklet is a bit more verbose
foldbackDist.parameters.get("threshold").setValueAtTime(1, ctx.currentTime);

slider.addEventListener("input", (e) => {
  foldbackDist.parameters
    .get("threshold")
    .linearRampToValueAtTime(e.target.valueAsNumber, ctx.currentTime + 0.02);
});

fetch(kickPath)
  .then((response) => response.arrayBuffer())
  .then((buffer) => ctx.decodeAudioData(buffer))
  .then((decodedB) => {
    ctx
      .createClock((time, duration, tick) => {
        const source = ctx.createBufferSource();
        source.buffer = decodedB;
        source.connect(foldbackDist);
        source.start(ctx.currentTime);
      }, 0.5)
      .start();
  });
