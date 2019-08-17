// pages/index2/index2.js
var idTime; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag1: ['不限','短租','长租'],
    ctag1:0,
    tag2: ['不限', '一大', '二大', '三大', '市中心'],
    ctag2: 0,
    tag3: ['不限', 'A线沿线', 'B线沿线','其他'],
    ctag3: 0,
    tag4: ['不限', '单人', '合租'],
    ctag4: 0,
  },
  changeTag1:function(e){
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
  noneAll: function (e) {
    this.setData({
      ctag1: 0,
      ctag2: 0
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/house/getallhouses',
      method: 'GET',
      success: function (res) {
        that.setData({
          allHouses: res.data.allHouses
        });
      }
    });
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