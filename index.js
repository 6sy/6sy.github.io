// 获取本地音视频流
async function getLocalStream(constraints) {
  // 获取媒体流
  
  const stream = await navigator.mediaDevices.getUserMedia(constraints)
  alert(1)
  // 将媒体流设置到 video 标签上播放
  playLocalStream(stream)
}

// 播放本地视频流
function playLocalStream(stream) {
  const videoEl = document.getElementById('localVideo') 
  videoEl.srcObject = stream
}

getLocalStream({
  audio: false,
  video: true,
})
