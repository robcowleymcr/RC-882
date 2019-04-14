import axios from 'axios'

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
  async loadSound (url, index) {
    try {
      const arrayBuffer = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
          'Accept': 'audio/wav'
        }
      })
      this.array[index].buffer = arrayBuffer.data
    } catch (error) {
      console.log(error)
    }
  },
  loadSounds () {
    this.array.forEach((obj, index) => {
      this.loadSound(obj.src, index)
    })
    console.log(this.array)
  }
}
