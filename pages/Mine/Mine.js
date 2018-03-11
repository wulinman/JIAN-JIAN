const app = getApp()
// pages/Mine/Mine.js
import { JJRequest } from '../../utils/util.js'

Page({
  host: "http://111.230.135.232:3000/api",

  /**
   * 页面的初始数据
   */
  data: {
    bookshelf_image:[
      '/images/txx.jpg',
      '/images/lc.jpg',
      '/images/hn.jpg',
      '/images/mss.jpg'
    ],
    join_community:[
      {
        avator: '/images/hn.jpg',
        title: '《有一种候鸟》陈少聪',
        owner:'群主：BOB',
        number_partner:'群成员：4人'
      },
      {
        avator: '/images/lc.jpg',
        title: '《东方快车》阿加莎·克里斯蒂',
        owner: '群主：藤椒鸡',
        number_partner: '群成员：4人'
      }
    ],
    personal_avator: '',
    username:'藤椒兔',
    read_book:3,
    read_hour:20,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this;

    JJRequest({
      url: that.host + '/books',
      method: 'GET',
      success: res => {
        console.log("get bookList successful");
        that.setData({
          booksList: res.data.data
        });
      }
    });

    wx.getUserInfo({
      success:res=> {
        this.setData({
          username: res.userInfo.nickName,
          personal_avator: res.userInfo.avatarUrl
        })
        console.log(res);
      },
      fail:function() {
        console.log('fail')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  onBookItemClick: function (e) {
    wx.navigateTo({
      url: '../SentencesOfBook/SentencesOfBook?isbn=' + e.currentTarget.dataset.isbn + '&title=' + e.currentTarget.dataset.title + '&author=' + e.currentTarget.dataset.author
    })
  }
})