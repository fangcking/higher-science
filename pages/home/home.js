const app = getApp()
Page({
  data: {
    roomname: [
      '展厅',
      '卧室',
      '厨房',
      '展厅',
      '卧室',
      '厨房',
      '展厅',
      '卧室',
      '厨房',
    ],
    allstatus:[
      '回家',
      '离家',
      '就餐',
      '影音',
      '起床',
      '睡眠'
    ],
    allgoods: ['f','67',
      '8',
      '7',
      '6',
      '4',
      '3',
    '2',
      '1',
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
    lightStates:['开','关'],
    lightSwitch:'',
    adress: '../set/setroom'
  },
  onLoad:function(){
    let that = this;
    let inter = setInterval(function(){
      let b = (Math.round(Math.random() * 100)) > 50 ? 0 : 1;
      // console.log(b)
      that.setData({
        i: b
      })
    },100);
    setTimeout(function () {
      clearInterval(inter)

    }, 50000)  
  },
})