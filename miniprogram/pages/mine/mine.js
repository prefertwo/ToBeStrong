// miniprogram/pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: true,
    list: [
      {
        title: '基本信息',
        path: '',
        icon: 'info'
      },
      {
        title: '我的记录',
        path: '',
        icon: 'tag'
      },
      {
        title: '联系作者',
        path: '',
        icon: 'qr-code'
      },
      {
        title: '意见反馈',
        path: '',
        icon: 'pencil'
      },
      {
        title: '关于变强',
        path: '',
        icon: 'help'
      },
      {
        title: '更多小程序',
        path: '',
        icon: 'more2'
      }

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },

  // 微信登录
  loginWithWX: function() {
    // wx.login({
    //   complete: (res) => {
    //     console.log('=====', res);
    //   },
    // })
    wx.getUserInfo({
      success: res => {
        console.log('success==', res);
      },
      complete: (res) => {
        console.log(res);
        // 失败res: {errMsg: "getUserInfo:fail scope unauthorized"}
      },
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