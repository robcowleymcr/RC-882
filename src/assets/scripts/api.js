import axios from 'axios'

const getAudioContext = () => {
  let AudioContext = window.AudioContext || window.webkitAudioContext
  const audioContent = new AudioContext()
  return audioContent
}

export default {
  array: [
    {
      name: 'snare',
      src: 'wav/snare.wav'
    },
    {
      name: 'kick',
      src: 'wav/kick.wav'
    },
    {
      name: 'hat',
      src: 'wav/hat.wav'
    }
  ],
  async loadSounds () {
    const audioContext = getAudioContext()
    let array = this.array

    array.forEach(async obj => {
      await axios.get(obj.src, {
        responseType: 'arraybuffer',
        headers: {
          'Accept': 'audio/wav'
        }
      })
        .then(async response => {
          const audioBuffer = await audioContext.decodeAudioData(response.data)
          obj.source = audioContext.createBufferSource()
          obj.source.buffer = audioBuffer
          obj.source.connect(audioContext.destination)
        })
    })
  }
}
