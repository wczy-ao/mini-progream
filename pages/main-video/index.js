// pages/main-video/index.js
import HYRequest from '../../services/request'
Page({
  data: {
    topMVList: []
  },
  onLoad() {
    HYRequest.get('/top/mv',{
      limit: 20,
      offset: 0
    }).then(res => {
      this.setData({
        topMVList:res.data
      })
    })
  }
})