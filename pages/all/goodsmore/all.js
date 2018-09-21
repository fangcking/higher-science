const app = getApp()
Page({
data:{
  allGoods:[
    { 
      foodname: "灯具",
      id:1,
      bgimage: "url('../../images/all.png')"
      },
    { 
      foodname:"空调",
      id:2,
      bgimage: "url('../../images/all.png')"
      },
    { 
      foodname: "空气净化",
      id:3,
      bgimage: "url('../../images/all.png')"
      },
    { 
      foodname: "窗帘",
      id: 4,
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
      bgimage: "url('../../images/all.png')"
      } 
  ]
},
  tapName: function (event) {
    console.log(event.currentTarget.id)
  }
})