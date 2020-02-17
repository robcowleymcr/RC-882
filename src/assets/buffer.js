export default class Buffer {
  constructor (context, urls) {
    this.context = context
    this.urls = urls
    this.buffer = []
  }

  async loadSound (url, index) {
    let request = new XMLHttpRequest()
    request.open('get', url, true)
    request.responseType = 'arraybuffer'
    let thisBuffer = this
    request.onload = function () {
      thisBuffer.context.decodeAudioData(request.response, function (buffer) {
        thisBuffer.buffer[index] = buffer
      })
    }
    request.send()
  };

  async loadAll () {
    this.urls.forEach((url, index) => {
      this.loadSound(url, index)
    })
  }

  getSoundByIndex (index) {
    return this.buffer[index]
  }
}
