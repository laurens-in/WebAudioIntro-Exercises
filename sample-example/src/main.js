import samplePath from "./assets/snare.wav"

const ctx = new AudioContext()

document.addEventListener("click", () => { ctx.resume() })

const sample = await fetch(samplePath)
const sampleArrayBuffer = await sample.arrayBuffer()
const sampleBuffer = await ctx.decodeAudioData(sampleArrayBuffer)

const button = document.querySelector("#play-sample")

button.addEventListener("click", () => {
  const bufferSource = ctx.createBufferSource()
  bufferSource.buffer = sampleBuffer
  bufferSource.connect(ctx.destination)
  bufferSource.start(ctx.currentTime)
})