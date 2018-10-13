// Components/aside/aside.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   itemto : String,
   itemname : Array
  //  roomname :String
  },
  data: {
    open: false,
    lastpageX: null,
    lastpageY: null,
    // 侧栏灵敏度
    v: 1,
    // 防止误触高度设置
    yv: 5,
    setnavstatus:true,
    roomslocalname: 'setroom',
  },
  methods: {
    toggle (e) {
      console.log(e.detail)
      let opentype = !this.data.open
      this.setData({
        open: opentype
      })
    },
    // 左划打开侧栏,
    slide(e) {
      console.log(this.data.lastpageX + '初始值')
      var pageX = parseInt(e.touches[0].pageX);
      var pageY = parseInt(e.touches[0].pageY);
      if (this.data.lastpageX == null) {
        console.log('shezhi')
        this.setData({
          lastpageX: pageX,
          lastpageY: pageY
        })
      } else {
        // 关闭nav
        // 监测是否x轴移动的同时，y轴移动小，防止移动端斜着上划返回
        console.log(pageX + '最后值')
        if (this.data.lastpageX - pageX >= this.data.v) {
          console.log('关闭')
          if (this.data.lastpageY - pageY <= this.data.yv || pageY - this.data.lastpageY <= this.data.yv) {
            // 判断防止多次触发改变初始值
            if (this.data.open) {
              this.setData({
                open: false,
                lastpageX: 140,

              })
            }
          }
        }
      }
    },
    tosetroom () {
      wx.navigateTo({
        url: this.properties.itemto,
      })
    },
    tapsetnav () {
      this.setData({
        setnavstatus: false
      })
    },
    setrooms(e){
      this.setData({
       itemname:e.detail
      })
    },
     showset(){
       this.setData({
         setnavstatus : true
       })
     } 
  }
})
