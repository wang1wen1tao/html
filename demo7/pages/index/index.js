const app = getApp();
Page(
  {
    data:{
      imgUrls: [
        '../images/swiper01.jpg',
        '../images/swiper02.jpg',
        '../images/swiper03.jpg'
      ],
      indicatorDots: true,
      autoplay:true,
      interval:'5000',
      duration:'2000',
      proList:[
       {
          logo:"../images/pro_01.jpg",
          title: "购房资格测试器",
          desc:"轻松测出你买房是首套房还是二套房，还能购几套房，以及相应的房贷利率是多少，对待限购不在迷茫"
       },
        {
          logo: "../images/pro_02.jpg",
          title: "房贷计算器",
          desc: "房贷计算器用于计算用户在申请商业贷款的情况下，选择等额本金和等额本息两种不同的还款方式后"
        },
        {
          logo: "../images/pro_03.jpg",
          title: "公积金贷款计算器",
          desc: "款计算器用于计算用户在申请公积金贷款时，选择等额本金和等额本息两种不同的还款方式"
        },
        {
          logo: "../images/pro_01.jpg",
          title: "购房资格测试器",
          desc: "轻松测出你买房是首套房还是二套房，还能购几套房，以及相应的房贷利率是多少，对待限购不在迷茫"
        },
        {
          logo: "../images/pro_02.jpg",
          title: "房贷计算器",
          desc: "房贷计算器用于计算用户在申请商业贷款的情况下，选择等额本金和等额本息两种不同的还款方式后"
        },
        {
          logo: "../images/pro_03.jpg",
          title: "公积金贷款计算器",
          desc: "款计算器用于计算用户在申请公积金贷款时，选择等额本金和等额本息两种不同的还款方式"
        }
      ]
    },
    chage(){
      this.data.num = 1
      this.setData({
        num: this.data.num
      })
    }
  }
)