// Components/homestatus/homestatus.js
Component({
 
  properties: {
    statusItems:Array,
    title:String,
    howshow:String,
  },
  data: {
    needhide:true,
    addhomestatus:'homestatus',
    allitem:false,
    current_item: null,

  },
  methods: {
    addstatus(e){
      // +1 防止判断位置0时无法判断
      let cuu = e.currentTarget.dataset.key +1
      let a =!this.data.allitem 
        this.setData({
          current_item: cuu,
          allitem: a
        })
      console.log(a)
      console.log(this.data.current_item+'系统按得值是')
      if(cuu && a){
        // 页面跳转加载跳转路由
        console.log("打开成功")
      }
    },
    setstatusslot(e){
      var a = !this.data.allitem
      this.setData({
        needhide:false,
       
      })
    },
    setstatus(e){
      this.setData({
        statusItems : e.detail,
      })
    }
  }
})
