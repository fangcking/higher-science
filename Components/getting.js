// my-behavior.js
// 从本地或者网络获取数据
const app = getApp()
module.exports = Behavior({
  behaviors: [],
  properties: {
    // 获取的本地数据存储名字
    getDataName: String,
    oriData: Array
  },
  data: {
   localdata :{}
  },
  ready: function(){
    this.update()
  },
  methods: {
    update() {
      // 本地读取
      let getdata =[]
      // getdata为数组
      wx.getStorage({
        key: this.properties.getDataName,
        success: res =>{
          console.log('获取到本地有数据')
          // 内置数据加用户设置数据
           getdata.push(...res.data);
        },
        fail:()=> {
           getdata = this.properties.oriData;
          console.log('本地mei有数据')
          wx.showToast({
            title: '获取数据失败',
            image :'/images/err.png'
          })
        },
        complete:()=> {
          this.setData({
            localdata: {
              key: this.properties.getDataName,
              datavalue: getdata
            },
          })
          this.triggerEvent('getdataback', getdata)
          wx.request({
            url: app.globalData.requestUrl,
            method:"POST",
            data:this.data.localdata, 
            success:res=> {
              console.log('get中')
              // 再次触发事件传回后台数据
              // 对比前后台数据，若不符摒弃客户端数据
              // 设置后台传回数据为data
              // datacode 为0表示
              // if(res.datacode ===0){
              //   // 缓存数据过期或错误
              //   this.setData({
              //     localdata :res.data
              //   })
              
              // }
            },
            fail: function (res) {
              console.log('无法获取服务器数据,载入缓存')
            }
          })
        }
      })
    },
  }
})