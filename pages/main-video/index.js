// pages/main-video/index.js
import { getTopMV } from '../../services/video'
Page({
  data: {
    topMVList: []
  },
  onLoad() {
    this.getMvList()
  },
  getMvList() {
    getTopMV(0).then(res => {
      this.setData({
        topMVList: res.data
      })
    })
  }
})