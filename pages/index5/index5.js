// pages/index5/index5.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {

    active: 1
  },
  //我的二手
  modifyObject(e) {
    var that = this;
    wx.navigateTo({
      url: '/pages/index2/mything/mything?id=' + e.target.id
    })
  },
  deleteObject(e) {
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/object/deleteobject?objectId='+e.target.id,
      method: 'GET',
      success: function (res) {
        that.onLoad();
        that.setData({
          active:0
        })
      }
    });
  },
  //我的生活
  modifyLife(e) {
    var that = this;
    wx.navigateTo({
      url: '/pages/index4/myhelp/myhelp?id=' + e.target.id
    })
  },
  deleteLife(e){
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/discussion/deletediscussion?discussionId=' + e.target.id,
      method: 'GET',
      success: function (res) {
        that.onLoad()
      }
    });
  },
  //我的租房
  modifyHouse(e) {
    var that = this;
    wx.navigateTo({
      url: '/pages/index2/myloge/myloge?id=' + e.target.id
    })
  },
  deleteHouse(e) {
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/house/deletehouse?houseId=' + e.target.id,
      method: 'GET',
      success: function (res) {
        that.onLoad()
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //get userid
    this. setData({
      userid: getApp().globalData.userid
    })
    //get data
    wx.request({
      url: 'http://47.254.154.195:8083/object/getobjectsbyowner?ownerId=' + that.data.userid,
      method: 'GET',
      success(res) {
        console.log(res);
        this.setData({
          data1: res.data.discussionByOwner
        })
      }
    }); 
    wx.request({
      url: 'http://47.254.154.195:8083/discussion/getdiscussionbyowner?owner=' + that.data.userid,
      method: 'GET',
      success(res){
        that.setData({
          data2: res.data.discussionByOwner
        });
      }
    }); 
    wx.request({
      url: 'http://47.254.154.195:8083/house/gethousebyowner?houseId=' + that.data.userid,
      method: 'GET',
      success(res) {
        that.setData({
          data3: res.data.houseByOwner
        })
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