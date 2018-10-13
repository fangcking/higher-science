// pages/aboutme/aboutme.js
const app = getApp()
Page({
  data: {
    province: "",
     city: "",
     phonenumber:null,
     loginstatus :true,
     myicon :null,
     setlogin :false,
     passcode :true,
     loginbt :true,
     passnumber :null
  },
  onLoad(){
    // 判断是否已经登录
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo){
      this.setData({
        loginstatus :false,
        myicon: app.globalData.userInfo.avatarUrl
      })
    }
  },
  login: function(){
   this.setData({
     setlogin: true
   })
  },
  phoneinput(e) {
    let phone = e.detail.value;
    let a =/^\d{11}$/g.test(phone);
    console.log(a)
    if (a) {
      this.setData({
        passcode :false
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
    else{
      this.setData({
        passcode: true
      })
    }
  },
  phonetap(){
    let phone= this.data.phonenumber;
    let a=[];
    for(let i=0;i<6;i++){
      let q = Math.floor((Math.random()) * 9);
      a[i]=q
    };
     let b=a.join('');
    if(phonenumber !=''&&phonenumber!=null){
      wx.request({
        // url: 'https://way.jd.com/BABO/sms?mobile=' + phonenumber + '&msg=【巴卜技术】您的验证码是' + b +',若非本人操作请忽略&appkey=f25608dc281d634baa558498a0d20cd5',
        success: function (res) {
          console.log(res)
        }
      })
    }  
  },
  codeinput(e){
    let passnumber = e.detail.value;
    this.setData({
      passnumber:passnumber
    })
    let a = /^\d{6}$/g.test(passcode);
    if (a) {
      this.setData({
        loginbt: false
      })
    }
  },
  codetap(){
   wx.request({
     url: '',
     data :"passnumber"+this.data.passnumber,
     method :"POST",
     success:res =>{
       this.setData({
        //  等接口文档 mmp
         loginstatus:false,
         phonenumber:res.phonenumber

       })
     }
   })
  },
  scan(){
   wx.scanCode({
     success :(res) =>{
       console.log('aaaa')
     },
     fail :(res) =>{
       console.log(res)
     }
   })
  },
  myorder(){

  },
  order(){

  },
  contact(){
   
  },
  loginbt(){

  }
})