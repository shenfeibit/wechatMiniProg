// pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      userid: getApp().globalData.userid
    });
    //get things
    wx.request({
      url: 'http://47.254.154.195:8083/object/getallobjects',
      method: 'GET',
      success: function (res) {
        //set all things
        that.setData({
          allObjects: res.data.allObjects
        });
        console.log(res.data.allObjects);
      }
    })
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

  },
  szan: function (e) {
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/object/dislikeobject?userId=' + that.data.userid + "&objectId=" + e.target.id,
      method: 'GET',
      success: function (res) {
        //change 
        that.onLoad();
      }
    });
  },
  dzan: function (e) {
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/object/likeobject?userId=' + that.data.userid + "&objectId=" + e.target.id,
      method: 'GET',
      success: function (res) {
        //change 
        that.onLoad();
      }
    });
  }
})