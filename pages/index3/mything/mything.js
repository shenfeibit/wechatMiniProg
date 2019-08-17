// pages/index3/mything/mything.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function (e) {
    var that = this;
    if (that.data.id) {
      that.setData({
        url: 'http://47.254.154.195:8083/object/modifyobject'
      })
    }
    else {
      that.setData({
        url: 'http://47.254.154.195:8083/object/addobject'
      })
    }
    wx.request({
      url: that.data.url,
      method: 'POST',
      data: {
        "owner": getApp().globalData.userid,
        "name": e.detail.value.name,
        "discription": e.detail.value.description,
        "price": e.detail.value.price,
        "contactName": e.detail.value.contactName,
        "contactNum": e.detail.value.contactNum,
        "contactWechat": e.detail.value.contactWechat,
      },
      success(){
        wx.switchTab({
          url: "/pages/index3/index3"
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      id: options.id
    });
    if (options.id) {
      wx.request({
        url: 'http://47.254.154.195:8083/object/getobjectbyid?id=' + that.data.id,
        method: 'GET',
        success: function (res) {
          that.setData({
            name: res.data.SHobject.name,
            discription: res.data.SHobject.description,
            price: res.data.SHobject.price,
            contactName: res.data.SHobject.contactName,
            contactNum: res.data.SHobject.contactNum,
            contactWechat: res.data.SHobject.contactWechat,
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