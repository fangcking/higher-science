// Components/aside/aside.js
const app = getApp()
Component({
  properties: {
   itemto : String,
   oriData : Array
  //  roomname :String
  },
  data: {
    open: false,
    oripageX: null,
    oritpageY: null,
    // 侧栏灵敏度
    v: 30,
    // 防止误触高度设置
    yv: 5,
    setnavstatus:true,
    roomslocalname: 'setroom',
  },
  methods: {
    toggle (e) {
      let opentype = this.data.open
      this.setData({
        open: !opentype
      })
    },
    slide(e) {
      var pageX = parseInt(e.touches[0].pageX);
      var pageY = parseInt(e.touches[0].pageY);
      if(this.data.oripageX == null && this.data.open){
        this.setData({
          oripageX :pageX,
          oripageY :pageY
        })
      }else{
        // 关闭nav
        // 监测是否x轴移动的同时，y轴移动小，防止移动端斜着上划返回
        console.log(this.data.oripageX + '初始值')
        console.log(pageX + '最后值')
        if (this.data.oripageX - pageX >= this.data.v) {
          if (this.data.oripageY - pageY <= this.data.yv || pageY - this.data.oripageY <= this.data.yv) {
            // 判断防止多次触发改变初始值
            if (this.data.open) {
              this.setData({
                open: false,
                oripageX:null,
                oripageY:null
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
