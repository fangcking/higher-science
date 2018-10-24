// Components/setGoods/setGoods.js
// 数据保存到本地和服务器
const app = getApp()
var getting = require('../getting.js')
Component({
  behaviors: [getting],
  properties: {
    // 本地存储数据名字
    setDataName: String,
    hidden: Boolean,
    needSetMore:Boolean,
    SetMoreMsg:Array,
    placeholder:String
  },
  data: {
    settingindex:1,
    disabled:'disabled',
    settingMoreMsg:[{
      name: "选择模式",
      value: "设置参数"
    }
    ]
  },
  ready: function () {
  },
  methods: {
  select(e){
    let index = e.detail.value
      this.setData({
        settingindex:index,
        disabled:'',
      })
    let localdata = this.data.localdata.datavalue
    let maininput = localdata[index].name
    for (let value of localdata) {
      if (value.name === maininput) {
        this.setData({
          settingMoreMsg: value.more
        })
      } 
    }
  },
   Setting(e){
      // 本地存储 name value
     let index = e.detail.value.maininput
     let localdata = this.data.localdata.datavalue
     let maininput = localdata[index].name
     let AllMsg = e.detail.value
     let setDataName = this.properties.setDataName
      //  localdata 格式为{
      //   name :"",
      //   id :"",
      //   more:""
      // }
      let lastid
      let state 
      let valueidlists = []
      for (let value of localdata){
        console.log(maininput)
        console.log(value.name)
        if(value.name === maininput){
        lastid =value.id
        state = 0
        break
        } 
        else{
          valueidlists.push(value.id)
          lastid = Math.max.apply(null, valueidlists) + 1
          state = 1
        }
      }
      console.log(state)
     let moreMsg =[]
     for(let value in AllMsg){
       if(value !=="maininput"){
          let l ={}
          l.name =value
          l.value =AllMsg[value]
         moreMsg.push(l)
       }
     }
     this.setData({
       settingMoreMsg: moreMsg
     })
     let a = {
       name: maininput,
       id: lastid,
       more: moreMsg
     }
     if(state == 0){
       let item =lastid-1
       localdata.splice(item,1,a)
       console.log(localdata)
     }else{
       localdata.push(a)
     }
     // 本地存入的同时，向后台提交数据
     wx.setStorage({
       key: setDataName,
       data: localdata,
       success: () => {
         wx.showToast({
           title: '本地保存成功'
         }),
           this.setData({
             disabled: "disabled"
           })
       },
       complete: () => {
         // 为测试方便 在这里调用
        //  this.update()
         wx.request({
           url: app.globalData.requestUrl,
           method:"POST",
           data:localdata,
           success: res => {
             // 触发get组件 更新数据 
             console.log("成功")
             this.update()
           },
           fail: res => {
             console.log('保存到服务器失败')
           }
         })
       }
     })
    },
    back() {
      this.setData({
        hidden: true
      })
      // 将隐藏的消息发出
      this.triggerEvent('returnpre')
    }
  }
})