// my-behavior.js
// 从本地或者网络获取数据
module.exports = Behavior({
  behaviors: [],
  properties: {
    // 获取的本地数据存储名字
    getDataname: String,
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
      let that = this
      let getdata = that.properties.oriData;
      console.log(getdata)
      wx.getStorage({
        key: this.properties.getDataname,
        success: function (res) {
          console.log('获取到本地有数据')
          // 内置数据加用户设置数据
           getdata.push(...res.data);
        },
        fail: function () {
          console.log('本地mei有数据')
          wx.showToast({
            title: 'sorry，暂未获取到您的信息'
          })
        },
        complete () {
          //  去重 
          getdata = [...new Set(getdata)]
          that.setData({
            localdata: {
              key: that.properties.getDataname,
              data: getdata
            },
          })
          that.triggerEvent('getdataback', getdata)
          wx.request({
            url: 'http://localhost:8083/',
            data: that.properties.getDataname,
            success: function (res) {
              // 再次触发事件传回后台数据
              // 对比前后台数据，若不符摒弃客户端数据
              // 设置后台传回数据为data
              var res =JSON.parse(res)
              if(res.datacode == 1){
                if (res.data != that.properties.oriData){
                  that.setData({ 
                    oriData: res.data
                    })
                }
              }
            },
            fail: function (res) {
              console.log('无法获取服务器数据')
            }
          })
        }
      })
    },
  }
})