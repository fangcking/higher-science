// pages/aboutme/aboutme.js
const app = getApp()
Page({
  data: {
    province: "",
    city: "",
    phonenumber: null,
    passnumber: null,
    loginstatus: true,
    myicon: null,
    setlogin: false,
    avoidpasscode: true,
    avoidlogin: true,
    btcon: "发送验证码"
  },
  onLoad() {
    // 判断是否已经登录
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        loginstatus: false,
        myicon: app.globalData.userInfo.avatarUrl
      })
    }
  },
  showloginform: function () {
    this.setData({
      setlogin: true
    })
  },
  iscorrectphone(e) {
    let a = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/g
    return a.test(e)
  },
  phoneinput(e) {
    let phone = e.detail.value;
    // 简易phone判断
    let a = this.iscorrectphone(phone)
    let b = /^\d{6}$/g.test(this.data.passnumber)
    let allowlogin = a && b
    console.log(allowlogin)
    if (a) {
      this.setData({
        avoidpasscode: false,
        avoidlogin: !allowlogin,
        phonenumber: phone
      })
      var self = this;
      // wx.request({
      //   url: "https://way.jd.com/jisuapi/query4?shouji="+phonenumber+"&appkey=f25608dc281d634baa558498a0d20cd5",
      //   success: function (res) {
      //     let resa = res.data;
      //     let ress = resa.result.result;
      //     self.setData({
      //     province: ress.province,
      //     city:ress.city,
      //     phonenumber:ress.shouji
      //     })
      //   },
      //   fail:function(res){
      //     wx.showToast({
      //       title: "出错了...",
      //       icon: "none",
      //       mask:true
      //     });
      //   }
      // })
    }
    else {
      this.setData({
        avoidlogin: true,
        avoidpasscode: true
      })
    }
  },
  sendpassnumber(e) {
    console.log(e)
    let phonenumber = this.data.phonenumber;
    let a = [];
    for (let i = 0; i < 6; i++) {
      let q = Math.floor((Math.random()) * 9);
      a[i] = q
    };
    let b = a.join('');
    if (phonenumber != '' && phonenumber != null) {
      wx.request({
        // url: 'https://way.jd.com/BABO/sms?mobile=' + phonenumber + '&msg=【巴卜技术】您的验证码是' + b +',若非本人操作请忽略&appkey=f25608dc281d634baa558498a0d20cd5',
        url: "http://192.168.13.214/ReadMeterJsonService.asmx/getMayPersonJson",
        method: "POST",
        success: res => {
          let data = JSON.parse(res.data.d)
          for (a of data) {
            console.log(a.Name)
          }
        },
        complete: res => {
          this.setData({
            avoidpasscode: true
          })
          let i = 60
          var a = setInterval(() => {
            if (i > 0) {
              this.setData({
                btcon: i
              })
              i--
            } else {
              clearInterval(a)
              this.setData({
                avoidpasscode: false,
                btcon: "请输入验证码"
              })
            }
          }, 1000)
        }
      })
    }
  },
  codeinput(e) {
    let passnumber = e.detail.value
    let a = /^\d{6}$/g.test(passnumber)
    let b = this.iscorrectphone(this.data.phonenumber)
    console.log(a + '' + b)
    let allowlogin = a && b
    this.setData({
      passnumber: passnumber,
      avoidlogin: !allowlogin
    })
  },
  login() {
    wx.request({
      url: '',
      data: {
        "passnumber": this.data.passnumber,
        "phonenumber": this.data.phonenumber
      },
      method: "POST",
      success: res => {
        this.setData({
          //  等接口文档 mmp
          loginstatus: false,
          phonenumber: res.phonenumber

        })
      }
    })
  },
  scan() {
    wx.scanCode({
      success: (res) => {
        console.log('aaaa')
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  myorder() {

  },
  order() {

  },
  contact() {

  },
  loginbt() {

  }
})