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
  async loadSound () {

  }
}
