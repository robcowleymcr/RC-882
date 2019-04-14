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
  loadSound (url, index) {
    axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'audio/wav'
      }
    }).then((response) => {
      console.log(this.array[index])
      this.array[index].buffer = response.data
    })
  },
  loadSounds () {
    this.array.forEach((obj, index) => {
      this.loadSound(obj.src, index)
    })
    console.log('finished loop')
  }
}
