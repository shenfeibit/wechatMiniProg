App({
  globalData: {
    openid: null,
    userid:null
  },
  onLaunch: function (){

  },
  //获取用户信息
  createUser: function () {
    var that = this;
    wx.login({
      success(res) {
        console.log(res);
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'http://47.254.154.195:8083/getid/getopenid?code=' + res.code,
            success: function (res) {
              console.log(res);
              //set openid
              that.globalData.openid = res.data.openid
              //check if a user already exists
              wx.request({
                url: 'http://47.254.154.195:8083/user/getuserbyopenid?openid=' + that.globalData.openid,
                success: function (res) {
                  if (res.data.UserByOpenId!=null) {
                    //set userid
                    console.log(res.data.UserByOpenId.id);
                    that.globalData.userid = res.data.UserByOpenId.id;
                  }else{
                    //create user
                    wx.request({
                      url: 'http://47.254.154.195:8083/user/adduser',
                      method: 'POST',
                      data: {
                        openid: that.globalData.openid,
                        name:'0'
                      },
                      success: function (res) {
                        //get userid
                        wx.request({
                          url: 'http://47.254.154.195:8083/user/getuserbyopenid?openid=' + that.globalData.openid,
                          method: 'GET',
                          success: function (res) {
                            //set userid
                            console.log(that.globalData);
                            console.log(res);
                            that.globalData.userid = res.data.id
                          }
                        });
                      }
                    });//fin create user
                    console.log(that);
                    console.log(res.data.id);
                  }
                }
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    return that.globalData.userid;
  }
});