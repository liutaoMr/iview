//相机初始化
export function cameraInit () {
  this.video = this.$refs.video
  this.canvas = this.$refs.canvas
  this.handleUserCamera()
}
//启动相机
export function handleUserCamera () {
  const video = this.video
  this.photoOk = '1'
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {}
  }
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      // 首先，如果有getUserMedia的话，就获得它
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia
      // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented'))
      }
      // 否则，为老的navigator.getUserMedia方法包裹一个Promise
      return new Promise(function (resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject)
      })
    }
  }
  navigator.mediaDevices.getUserMedia({video: { width: 280, height: 280 }, audio: false})
    .then(stream => {
      video.srcObject = stream
      video.onloadedmetadata = function (e) {
        video.play()
      }
      this.mediaStream = stream
    })
    .catch(err => {
      console.log(err.name + ': ' + err.message)
    })
}
//将拍的照片画下来
export function handleCatchCode () {
  this.hasImage='1';
  const video = this.video
  const canvas = this.canvas
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  const context = canvas.getContext('2d')
  context.drawImage(video, 0, 0)
  this.handleCameraSave();
}
//存储照片实现
export function handleCameraSave () {
  // 获取浏览器页面的画布对象
  this.imageUrl = this.canvas.toDataURL('image/jpg')
  console.log(this.imageUrl);
  this.$emit('imageUrl', this.imageUrl)
  this.cameraUpload = false
}
