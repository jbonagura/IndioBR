var webrtc = new SimpleWebRTC({
  localVideoEl: 'localVideo',
  remoteVideosEl: 'remotesVideos',
  autoRequestMedia: true,
  debug: true,
  detectSpeakingEvents: true,
  autoAdjustMic: false
});

webrtc.on('readyToCall', function () {
  webrtc.joinRoom('learningBRHUE');
});
