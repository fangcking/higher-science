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
    // 测试需要  
    // needSetMore:Boolean,
    SetMoreMsg:Array,
    placeholder:String
  },
  data: {
    pvindex:[0,0],
    selectvalue: [],
    needSetMore:true,
    settingindex:1,
    moreindex:0,
    maininput:'',
    mainid:null,
    disabled:'disabled',
    settingMoreMsg:[
    ],
    needAddMore:true
  },
  ready: function () {
  },
  methods: {
  select(e){
    let index = e.detail.value
    let localdata = this.data.localdata.datavalue
    let maininput = localdata[index].name
    let mainid = localdata[index].id
    this.setData({
      settingindex: index,
      disabled: '',
      selectvalue: ['默认','开', '关'],
      pvindex: [0, 0],
      maininput: maininput,
      mainid :mainid
    })
    for (let value of localdata) {
      if (value.name === maininput) {
        this.setData({
          settingMoreMsg: value.more
        })
      } 
    }

  },
  a(res){
    let selectvalue = this.data.selectvalue
    let localdata = this.data.localdata.datavalue
    let maininput = this.data.maininput
    let mainid = this.data.mainid
    let index = res.detail.value
    // a [0,1]
    let lastid
    let state
    let valueidlists = []
    let morenamelist =[]
    let more
    // 设置id
    for (let value of localdata) {
      if (value.name === maininput) {
        lastid = value.id
        state = 0
        // 完全复制localdata的more
        more =value.more
        for (let value2 of value.more){
          morenamelist.push(value2.name)
        }
        break
      }
      else {
        valueidlists.push(value.id)
        lastid = Math.max.apply(null, valueidlists) + 1
        state = 1
      }
    }
  
    let moreMsg ={
      name :morenamelist[index[0]],
      value: selectvalue[index[1]]
    }
    if (moreMsg.value !=='默认') {
      if(more.length != 0){
        for (let item in more) {
          if (more[item].name === moreMsg.name) {
            more[item].value = moreMsg.value
          }
        }
      }else{
        more.push(moreMsg)
      }
      let a = {
        name: maininput,
        id: mainid,
        more: more
      }
      if (state == 0) {
        let item = lastid - 1
        localdata.splice(item, 1, a)
      } else {
        localdata.push(a)
      }
      console.log(localdata)
      this.setData({
        localdata: {
          key: this.properties.getDataName,
          datavalue: localdata
        },
        more: more
      })
    }  
  },
  addselect(e){
    let index =e.detail.value
    console.log(index)
    this.setData({
      moreindex:index
    })
  },
   Setting(e){
      // 本地存储 name value
     let addcon = e.detail.value.addmaininput
     let setDataName = this.properties.setDataName
     let localdata =this.data.localdata
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