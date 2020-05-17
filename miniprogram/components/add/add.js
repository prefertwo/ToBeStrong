// components/add/add.js
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
    open: true,
    rotate: '',
    showOrhide: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    addNew: function () {
      console.log('9999999');
      const { open } = this.data;

      let rotate = open ? 'AtoB' : 'BtoA';
      let showOrhide = open ? 'showAction' : 'hideAction'

      this.setData({
        open: !open,
        rotate,
        showOrhide
      })
    }

  }
})
