// miniprogram/pages/new/new.js
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
    const dateT = new Date().formate("yyyy-MM-dd")
    console.log(dateT);

    this.setData({
      currentDate: dateT
    })
  },

  // 提交
  submitRecord: function(e) {
    console.log(e);
    const values = e.detail.value;
    if(!values.theme) {
      return wx.showToast({
        title: '填写个合适的主题吧',
        icon: 'none'
      })
    }

    wx.showToast({
      title: '发布成功啦',
    })
  },

  // 上传图片
  uploadImage: function() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      complete: (res) => {
        console.log(res);
        const tempFilePaths = res.tempFilePaths; // 图片临时路径
        this.setData({
          images: tempFilePaths
        })
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