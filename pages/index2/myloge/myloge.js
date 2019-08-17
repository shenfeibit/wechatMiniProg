// pages/index2/myloge/myloge.js
//getApp().globalData.userid,
Page({

  
  formSubmit: function (e) {
    var that = this;
    if (that.data.id){
      that.setData({
        url:'http://47.254.154.195:8083/house/modifyhouse'
      })
    }
    else{
      that.setData({
      url:'http://47.254.154.195:8083/house/addhouse'
      })
    }
      wx.request({
        url: that.data.url,
        method:'POST',
        data:{
          "owner": getApp().globalData.userid,
          "title": e.detail.value.title,
          "description": e.detail.value.description,
          "location": e.detail.value.location,
          "surface": e.detail.value.surface,
          "price": e.detail.value.price,
          "start": "2019-03-07T00:00:00.000+0000",
          "locationtag": e.detail.value.locationtag,
          "traffictag": e.detail.value.traffictag,
          "contactName": e.detail.value.contactName,
          "contactNum": e.detail.value.contactNum,
          "contactWechat": e.detail.value.contactWechat,
        },
        success() {
          wx.switchTab({
            url: "/pages/index2/index2"
          })
        }
      })
  },
  uploadPhoto() {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        // upload(that, tempFilePaths);
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
      tag1: ['不限', '短租', '长租'],
      ctag1: 0,
      tag2: ['不限', '一大', '二大', '三大', '市中心'],
      ctag2: 0,
      tag3: ['不限', 'A线沿线', 'B线沿线', '其他'],
      ctag3: 0,
      tag4: ['不限', '单人', '合租'],
      ctag4: 0,
    },

    changeTag1: function (e) {
      this.setData({
        ctag1: e.currentTarget.dataset.idx
      })
    },
    changeTag2: function (e) {
      this.setData({
        ctag2: e.currentTarget.dataset.idx
      })
    },
    changeTag3: function (e) {
      this.setData({
        ctag3: e.currentTarget.dataset.idx
      })
    },
    changeTag4: function (e) {
      this.setData({
        ctag4: e.currentTarget.dataset.idx
      })
    },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      id : options.id
    });
    if (options.id){
      wx.request({
        url: 'http://47.254.154.195:8083/house/gethousebyid?houseId=' + that.data.id,
        method: 'GET',
        success: function (res) {
          that.setData({
            "title": res.data.houseById.title,
            "description": res.data.houseById.description,
            "location": res.data.houseById.location,
            "surface": res.data.houseById.surface,
            "price": res.data.houseById.price,
            "contactName": res.data.houseById.contactName,
            "contactNum": res.data.houseById.contactNum,
            "contactWechat": res.data.houseById.contactWechat,
          })
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})