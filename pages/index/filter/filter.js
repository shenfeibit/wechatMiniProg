// pages/index/filter/filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //list of plat
    plats: [{
      plat: {
        name: "肉",
        image: "../../../images/01.png",
        price: "6",
        resto: 'chezhong',
        tag: [{1: 'pikachu' }]
      },
      plat1: {
        name: "肉1",
        image: "../../../images/02.png",
        price: "66",
        resto: 'polo',
        tag: [{1:'miaow'}, {2:'pikachu'}]
      }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {

  // // },
  // onLoad: function (options) {
  //   var that = this;
  //   wx.request({
  //     url: 'http://47.254.154.195:8083/plat/getplatbytag?tag=' + options.tag,
  //     method: 'GET',
  //     success: function (res) {
  //       that.setData({
  //         plats: res.data.plats
  //       });
  //       console.log(options.tag);
  //       console.log(res.data.plats);
  //     }
  //   });
  // },

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

  }
})