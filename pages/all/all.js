const app = getApp()
Page({
data:{
  allgoods: [
    'f',
    '67',
    '8',
    '7',
    '6',
    '4',
    '3',
    '2',
    '1',
  ],
  allGoods:[
    { 
      foodname: "灯具",
      id:1,
      name:"lights",
      bgimage: "url('../../images/all.png')"
      },
    { 
      foodname:"空调",
      id:2,
      name: "aircondition",
      bgimage: "url('../../images/all.png')"
      },
    { 
      foodname: "空气净化",
      id:3,
      name: "airclear",
      bgimage: "url('../../images/all.png')"
      },
    { 
      foodname: "窗帘",
      id: 4,
      name: "wincuitain",
      bgimage: "url('../../images/all.png')"
      },
    { 
      foodname: "智能生态",
      id: 5,
      bgimage:"url('../../images/home.png')"
      },
    {
       foodname: "密码锁",
      id: 6,
      name: "lock",
      bgimage: "url('../../images/all.png')"
       },
    {
       foodname: "电磁炉",
      id: 7,
      bgimage: "url('../../images/all.png')"
       },
    {
      foodname: "烟雾报警",
      id: 8,
      bgimage: "url('../../images/all.png')"
    },
    { 
      foodname: "其他",
      id: 9,
      name: "others",
      bgimage: "url('../../images/all.png')"
      } 
  ]
},
  tapName: function (event) {
    wx.navigateTo({
      url: '../all/goodsmore/all'
    })
    var id =event.currentTarget.id.slice(5);
    var urlname='';
    for (var p of this.data.allGoods){
      if(p.id==id&&p.id!=5){
      urlname=p.name;
      // wx.navigateTo({
      //   url: '../all/' + urlname + '/all'
      // })
      }
    }
    
  },
  onLoad(){

  }
})
