//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    users: [
      {
        avatar: "http://www.neko-kurashi.com/img/kao01.jpg",
        name: "成实啊",
        sex: "man",
        job: "IT",
        location: "深圳",
        price: 123
      },
      {
        avatar: "http://www.neko-kurashi.com/img/kao01.jpg",
        name: "成实啊",
        sex: "man",
        job: "IT",
        location: "深圳",
        price: 123
      },
      {
        avatar: "http://www.neko-kurashi.com/img/kao01.jpg",
        name: "成实啊",
        sex: "man",
        job: "IT",
        location: "深圳",
        price: 123
      },
      {
        avatar: "http://www.neko-kurashi.com/img/kao01.jpg",
        name: "成实啊",
        sex: "man",
        job: "IT",
        location: "深圳",
        price: 123
      },
      {
        avatar: "http://www.neko-kurashi.com/img/kao01.jpg",
        name: "成实啊",
        sex: "man",
        job: "IT",
        location: "深圳",
        price: 123
      },
      {
        avatar: "http://www.neko-kurashi.com/img/kao01.jpg",
        name: "成实啊",
        sex: "man",
        job: "IT",
        location: "深圳",
        price: 123
      }
    ]
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  }
})
