const app = getApp()
Page({
  data: {
    roomname: [
      {
        name: "展厅",
        id: 1,
      },
      {
        name: "厨房",
        id: 2,
      },
      {
        name: "卧室",
        id: 3,
      },
      {
        name: "卫生间",
        id: 4,
      },
      {
        name: "车库",
        id: 5,
      },
    ],
    allstatus: [
      {
        name: "回家",
        id: 1,
      },
      {
        name: "离家",
        id: 2,
      },
      {
        name: "就餐",
        id: 3,
      },
      {
        name: "影音",
        id: 4,
      },
      {
        name: "起床",
        id: 5,
      },
      {
        name: "睡眠",
        id: 6,
      },
    ],
    allgoods: [
      {
        name: "灯具",
        id: 1,
        bgimage: "url('../../images/all.png')"
      },
      {
        name: "空调",
        id: 2,
        bgimage: "url('../../images/all.png')"
      },
      {
        name: "空气净化",
        id: 3,
        bgimage: "url('../../images/all.png')"
      },
      {
        name: "窗帘",
        id: 4,
        bgimage: "url('../../images/all.png')"
      },
      {
        name: "智能生态",
        id: 5,
        bgimage: "url('../../images/home.png')"
      },
      {
        name: "密码锁",
        id: 6,
        bgimage: "url('../../images/all.png')"
      },
      {
        name: "电磁炉",
        id: 7,
        bgimage: "url('../../images/all.png')"
      },
      {
        name: "烟雾报警",
        id: 8,
        bgimage: "url('../../images/all.png')"
      },
      {
        name: "其他",
        id: 9,
        bgimage: "url('../../images/all.png')"
      }
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
    lightStates: ['开', '关'],
    lightSwitch: '',
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
