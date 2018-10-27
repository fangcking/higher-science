const app = getApp()
Page({
  data: {
    roomname: [
      {
        name: "展厅",
        id: 1,
        more :[
          {
            name:"灯泡1",
            value :"guan"
          },
          {
            name: "灯泡2",
            value: "guan"
          },
          {
            name: "灯泡3",
            value: "guan"
          },
        ]
      },
      {
        name: "厨房",
        id: 2,
        more:[
          {
            name:"",
          value:""
          },
        ]
      },
      {
        name: "卧室",
        id: 3,
        more: [
          {
            name: "",
            value: ""
          },
        ]
      },
      {
        name: "卫生间",
        id: 4,
        more: [
          {
            name: "",
            value: ""
          },
        ]
      },
      {
        name: "车库",
        id: 5,
        more: [
          {
            name: "",
            value: ""
          },
        ]
      },
    ],
    homestatus: [
      {
        name: "回家",
        id: 1,
        more: [
          {
            name :"展厅",
            more:[
              {
                name: "回家灯泡1",
                value: "7"
              },
              {
                name: "回家灯泡2",
                value: "7"
              },
              {
                name: "回家灯泡3",
                value: "1"
              },
            ]   
          }, 
          {
            name: "卧室",
            more: [
              {
                name: "回家卧室灯泡1",
                value: "7"
              },
              {
                name: "回家灯泡2",
                value: "7"
              },
              {
                name: "回家灯泡3",
                value: "1"
              },
            ]
          },    
        ]
      },
      {
        name: "离家",
        id: 2,
        more: [
          {
            name: "lijia展厅",
            more: [
              {
                name: "lijia展厅灯泡1",
                value: "7"
              },
              {
                name: "展厅灯泡2",
                value: "7"
              },
              {
                name: "展厅灯泡3",
                value: "1"
              },
            ]
          },
          {
            name:"lijia卧室",
            more:[
              {
                name:"lijia卧室灯泡1",
                value :"2"
              },
              {
                name: "lijia卧室灯泡2",
                value: "3"
              },
            ]
          }
        ]
      },
      {
        name: "就餐",
        id: 3,
        more: [
          {
            name: "展厅",
            more: [
              {
                name: "展厅灯泡1",
                value: "7"
              },
              {
                name: "展厅灯泡2",
                value: "7"
              },
              {
                name: "展厅灯泡3",
                value: "1"
              },
            ]
          },
          {
            name: "卧室",
            more: [
              {
                name: "卧室灯泡1"
              }
            ]
          }
        ]
      },
      {
        name: "影音",
        id: 4,
        more: [
          {
            name: "展厅",
            more: [
              {
                name: "展厅灯泡1",
                value: "7"
              },
              {
                name: "展厅灯泡2",
                value: "7"
              },
              {
                name: "展厅灯泡3",
                value: "1"
              },
            ]
          },
          {
            name: "卧室",
            more: [
              {
                name: "卧室灯泡1"
              }
            ]
          }
        ]
      },
      {
        name: "起床",
        id: 5,
        more: [
          {
            name: "展厅",
            more: [
              {
                name: "展厅灯泡1",
                value: "7"
              },
              {
                name: "展厅灯泡2",
                value: "7"
              },
              {
                name: "展厅灯泡3",
                value: "1"
              },
            ]
          },
          {
            name: "卧室",
            more: [
              {
                name: "卧室灯泡1"
              }
            ]
          }
        ]
      },
      {
        name: "睡眠",
        id: 6,
        more: [
          {
            name: "展厅",
            more: [
              {
                name: "展厅灯泡1",
                value: "7"
              },
              {
                name: "展厅灯泡2",
                value: "7"
              },
              {
                name: "展厅灯泡3",
                value: "1"
              },
            ]
          },
          {
            name: "卧室",
            more: [
              {
                name: "卧室灯泡1"
              }
            ]
          }
        ]
      },
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // lightStates: ['开', '关'],
    // lightSwitch: '',
    adress: '../set/setroom'
  },
  onLoad() {
    let that = this;
    let inter = setInterval(function () {
      let b = (Math.round(Math.random() * 100)) > 50 ? 0 : 1;
      // console.log(b)
      that.setData({
        i: b
      })
    }, 100);
    setTimeout(function () {
      clearInterval(inter)

    }, 50000)
  },
})
