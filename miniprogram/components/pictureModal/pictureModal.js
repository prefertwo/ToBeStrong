// components/pictureModal/pictureModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    


  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    addClass: '',
    hidePictureAnimation: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    showPicture: function(value) {
      this.setData({
        show: true,
        addClass: 'showAnimation'
      })
    },

    hidePicture: function() {
      this.setData({
        // show: false,
        hidePictureAnimation: 'hideAnimation'
      }, () => {
        setTimeout(() => {
          this.setData({
            show: false,
            hidePictureAnimation: '',
            addClass: ''
          })
        }, 900)
      })
    }

  }
})
