const ctx = new AudioContext()

document.addEventListener("click", () => { ctx.resume() })


// object definitions

const carrier = ctx.createOscillator()
const outGain = ctx.createGain()

const modulator = ctx.createOscillator()
const modGain = ctx.createGain()

// ui interaction

const modFreqSlider = document.querySelector("#mod-frequency")
const modDepthSlider = document.querySelector("#mod-depth")
const carrierFreqSlider = document.querySelector("#carrier-frequency")
const outGainSlider = document.querySelector("#outgain")
const button = document.querySelector("#randomize")


modFreqSlider.addEventListener("input", (e) => {
  modulator.frequency.linearRampToValueAtTime(e.target.value, ctx.currentTime + 0.01)
})

modDepthSlider.addEventListener("input", (e) => {
  modGain.gain.linearRampToValueAtTime(e.target.value, ctx.currentTime + 0.01)
})

carrierFreqSlider.addEventListener("input", (e) => {
  carrier.frequency.linearRampToValueAtTime(e.target.value, ctx.currentTime + 0.01)
})

outGainSlider.addEventListener("input", (e) => {
  outGain.gain.linearRampToValueAtTime(e.target.value, ctx.currentTime + 0.01)
})

button.addEventListener("click", () => {
  const randomModFreq = Math.random() * 500
  const randomCarrierFreq = (Math.random() * 800) + 200
  const randomRampTime = Math.random() * 10

  modulator.frequency.linearRampToValueAtTime(randomModFreq, ctx.currentTime + randomRampTime)
  carrier.frequency.linearRampToValueAtTime(randomCarrierFreq, ctx.currentTime + randomRampTime)

  carrierFreqSlider.value = randomCarrierFreq
  modFreqSlider.value = randomModFreq
})

// audio code

modulator.connect(modGain)
modGain.connect(carrier.frequency)

carrier.connect(outGain)
outGain.connect(ctx.destination)

carrier.start(ctx.currentTime)
modulator.start(ctx.currentTime)

carrier.frequency.setValueAtTime(400, ctx.currentTime)
modulator.frequency.setValueAtTime(30, ctx.currentTime)
modGain.gain.setValueAtTime(30, ctx.currentTime)
