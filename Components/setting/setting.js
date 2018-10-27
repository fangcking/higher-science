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
    placeholder:String,
  },
  data: {
    pvindex:[0,0],
    selectvalue: [],
    needSetMore:true,
    settingindex:1,
    moreindex:0,
    maininput:'',
    mainid:null,
    addInput:'',
    noPicker:false,
    settingMoreMsg:[
    ],
    settingMoreMsg2:[],
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
  // 增删改查crud四件套
  create(res){
    let allGoods =this.data.createData
    let inputValue =res.detail.value
    let localdata = this.data.localdata.datavalue
    if (inputValue.length == 2){
      this.setData({
        needSetMore :false,
        selectvalue: ['默认', '开', '关'],
        maininput:inputValue,
        settingMoreMsg:localdata[1].more
      })
    }
  },
  upDate(res){
    let selectvalue = this.data.selectvalue
    let localdata = this.data.localdata.datavalue
    let maininput = this.data.maininput
    let mainid = this.data.mainid
    let index = res.detail.value
    // a [0,0,1]
    let lastid
    let state
    let valueidlists = []
    // localdata的more
    let more

    // 设置id
    for (let value of localdata) {
      if (value.name === maininput) {
        lastid = value.id
        state = 0
        // 完全复制localdata的more
        more =value.more
        break
      }
      else {
        valueidlists.push(value.id)
        lastid = Math.max.apply(null, valueidlists) + 1
        more =localdata[1].more
        state = 1
      }
    }
    if (more[index[0]].hasOwnProperty("more")){
      this.setData({
        settingMoreMsg2: more[index[0]].more
      })
    }
    // 两个值
    let moreMsg ={
      name :more[index[0]].name,
      value: selectvalue[index[2]]
    }
    // 三个值

    if (moreMsg.value !=='默认' && moreMsg.name != "") {
      if(more.length != 0){
        for (let item in more) {
          // 展厅
          if (more[item].name === moreMsg.name) {
            // 两个值的可以直接用
            if (more[item].hasOwnProperty("more")){
              // 三个值更改
              for(let a of more[item].more){
                if (a.name === more[index[0]].more[index[1]].name){
                  a.value = moreMsg.value
                }
              }
            }else{
              more[item].value = moreMsg.value
            } 
          }
        }
      }else{
        more.push(moreMsg)
      }
      let a = {
        name: maininput,
        id: lastid,
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
  delete(id){
    let localdata = this.data.localdata.datavalue
    console.log(localdata)
    wx.showActionSheet({
      itemList: ['确定删除该项'],
      success:res =>{
         if(res.tapIndex == 0){
           localdata.splice(id, 1)
           console.log(localdata)
           this.setData({
             localdata:localdata
           })
           this.triggerEvent('getdataback', localdata)
       }
      }
    })
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
        hidden: true,
        needSetMore:true,
        addInput :''
      })
      // 将隐藏的消息发出
      this.triggerEvent('returnpre')
    }
  }
})