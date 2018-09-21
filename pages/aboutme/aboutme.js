// pages/aboutme/aboutme.js
Page({
  data: {
    "code": "",
    "charge": false,
    "msg": "",
    "status": "",
    "msg": "",
    "province": "",
     "city": "",
    "company": "",
    "cardtype": "",
     "phone":""
  },
  bindinput: function (e) {
    this.setData({
      phone: e.detail.value, //更新手机号码
     
    })
  },
  phoneTap: function () {
    var phone = this.data.phone;
    if (phone != null && phone != "") {
      var self = this;
      //显示toast提示信息
      wx.showToast({
        title: "正在查询，请稍等...",
        icon: "loading",
        duration: 1000
      });
      wx.request({
        url: "https://way.jd.com/jisuapi/query4?shouji="+phone+"&appkey=f25608dc281d634baa558498a0d20cd5",
        success: function (res) {
          console.log(res)
          let resa = res.data;
          let ress = resa.result.result;
          self.setData({
          code:resa.code,
          company: ress.company,
          areacode:ress.areacode, 
          cardtype: ress.cardtype,
          province: ress.province,
          city:ress.city,
          shouji:ress.shouji
          })
        },
        fail:function(res){
          wx.showToast({
            title: "出错了...",
            icon: "none",
            mask:true
          });
        }
      })
    }
  },
  send:function(){
    let phone= this.data.phone;
    let a=[];
    for(let i=0;i<6;i++){
      let q = Math.floor((Math.random()) * 9);
      a[i]=q
    };
     let b=a.join('');
    console.log(b)
    if(phone !=''&&phone!=null){
      wx.request({
        // url: 'https://way.jd.com/BABO/sms?mobile=' + phone + '&msg=【巴卜技术】您的验证码是' + b +',若非本人操作请忽略&appkey=f25608dc281d634baa558498a0d20cd5',
        success: function (res) {
          console.log(res)
        }
      })
    }  
  },
  login:function(){
    console.log('adad')
    wx.navigateTo({
      url: '../demo/demo'
    })
  }
  
})