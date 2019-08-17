// pages/index/index.js
//获取app变量
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 加载search页面
   */
  goSearch: function () {
    wx.navigateTo({
      url: '../../pages/index/search/search'
    })
  },
  szan:function(e){
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/plat/dislikeplat?userId=' + that.data.userid + "&platId=" + e.target.id,
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
      url: 'http://47.254.154.195:8083/plat/likeplat?userId=' + that.data.userid + "&platId=" + e.target.id,
      method: 'GET',
      success: function (res) {
        //change 
        that.onLoad();
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; 
    that.setData({
      userid: app.globalData.userid
    });
    //get dishes
    wx.request({
      url: 'http://47.254.154.195:8083/plat/getspecialplats',
      method: 'GET',
      success: function (res) {
        //set all dishes
        that.setData({
          specialPlats: res.data.specialPlats
        });
      }
    });
    //get restos
     wx.request({
      url: 'http://47.254.154.195:8083/restaurant/getallrestaurants',
      method: 'GET',
      success: function (res) {
        //set all restos
        that.setData({
          allRestaurants: res.data.allRestaurants
        });
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
  dianji: function (e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      isLike: !e.target.dataset.favourite
    })
  }

})
