import sample from "../../assets/closedHat.wav"

const ctx = new AudioContext()

const response = await fetch(sample);
const arrayBuffer = await response.arrayBuffer();
const audioBuffer = await ctx.decodeAudioData(arrayBuffer);

const source = ctx.createBufferSource()

source.buffer = audioBuffer

source.connect(ctx.destination)

source.start()

const firstGain = ctx.createGain()
firstGain.gain.value = 0


const delay = ctx.createDelay()
delay.delayTime.value = 0.2
const feedbackGain = ctx.createGain()
feedbackGain.gain.value = 0.8

firstGain.connect(delay)
firstGain.connect(ctx.destination)
delay.connect(feedbackGain)
feedbackGain.connect(delay)
delay.connect(ctx.destination)


document.addEventListener("click", () => {
    ctx.resume()
    const osc = ctx.createOscillator()
    osc.frequency.value = (Math.random() * 300) + 300
    osc.connect(firstGain)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.2)
    firstGain.gain.setValueAtTime(1, ctx.currentTime)
    firstGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1)
    delay.delayTime.setValueAtTime(Math.random(), ctx.currentTime)
    delay.delayTime.exponentialRampToValueAtTime(Math.random(), ctx.currentTime + 2)
})


