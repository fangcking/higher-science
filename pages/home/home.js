const app = getApp()
Page({
  data: {
    roomname: [
      {
        name: "展厅",
        id: 1,
        more :{

        }
      },
      {
        name: "厨房",
        id: 2,
        more: {

        }
      },
      {
        name: "卧室",
        id: 3,
        more: {

        }
      },
      {
        name: "卫生间",
        id: 4,
        more: {

        }
      },
      {
        name: "车库",
        id: 5,
        more: {

        }
      },
    ],
    allstatus: [
      {
        name: "回家",
        id: 1,
        more: {

        }
      },
      {
        name: "离家",
        id: 2,
        more: {

        }
      },
      {
        name: "就餐",
        id: 3,
        more: {

        }
      },
      {
        name: "影音",
        id: 4,
        more: {

        }
      },
      {
        name: "起床",
        id: 5,
        more: {

        }
      },
      {
        name: "睡眠",
        id: 6,
        more: {

        }
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
