// pages/index2/filter/filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loges: [{
      loge: {
        id: 1,
        title: "房源",
        image: "../../../images/01.png",
        price: "666",
        tag: [{ 1: 'pikachu' }]
      },
      loge2: {
        id: 2,
        title: "房源1",
        image: "../../../images/02.png",
        price: "661",
        tag: [{ 1: 'miaow' }, { 2: 'pikachu' }]
      }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tag: options.id
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

  }
})