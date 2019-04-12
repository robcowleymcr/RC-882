// const url = './assets/snr.mp3'
// const soundsArray = [
//   {
//     name: 'snare',
//     src: './assets/snr.mp3'
//   },
//   {
//     name: 'kick',
//     src: './assets/snr.mp3'
//   },
//   {
//     name: 'hat',
//     src: './assets/snr.mp3'
//   }
// ]

export default {
  loadSound (url) {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((response) => {
        // return response
        console.log(response)
      })
  }
}
