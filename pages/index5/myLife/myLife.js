Page({
onLoad: function (options) {
  var that = this;
  wx.request({
    url: 'http://47.254.154.195:8083/plat/getspecialplats?restaurantId=' + options.id,
    method: 'GET',
    success: function (res) {
      that.setData({
        restaurant: res.data.restaurant
      });
      console.log(res.data.restaurant);
    }
  });
},
})