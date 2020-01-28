// pages/24/24.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   nums:"输入数字点击后显示结果"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
swch:function(sign,num,b){  

  switch (sign) {
    case '+':
      num = Number(num) +Number(b)
      break;
    case '-':
      num = Number(num) - Number(b)
      break;
    case '*':
      num = Number(num) * Number(b)
      break;
    case '/':
      num = Number(num) / Number(b)
      break;
  } 
 
return num;
}
,
  formSubmit: function (e) {
    var fruits = [e.detail.value.one, e.detail.value.two, e.detail.value.three, e.detail.value.four];
   var sign =["+","-","*","/"];
    console.log(sign)
    console.log('form发生了submit事件，携带数据为：', e.detail.value.one)
   var num;
    var arr = new Array(0);
    for (var i = 0; i <= 3; i++){
        for(var k = 0; k <= 3; k++){
          if(k!=i)
          for (var d = 0; d<=3 ; d++){
            if(d!=k&&d!=i)
            for (var z = 0; z<=3 ; z++){
              if(z!=d&&z!=k&&z!=i){
              console.log('i值', fruits[i])
              console.log('k值', fruits[k])
              console.log('d值', fruits[d])
              console.log('z值',fruits[z])
              num=fruits[i];
              for(var s1=0;s1<=3;s1++){
                for (var s2 = 0; s2 <= 3; s2++) {
                  for (var s3 = 0; s3<= 3; s3++) {
                  // this.swch(sign[s1],num,fruits[k]);
                  // this.swch(sign[s2], this.swch(sign[s1], num, fruits[k]),fruits[d])
                   var num3=this.swch(sign[s3], this.swch(sign[s2], this.swch(sign[s1], num, fruits[k]), fruits[d]),fruits[z])
                    if(num3==24){
                      
                      if (num3==24)
                        arr.push("(" + "(" + num + sign[s1] + fruits[k] + ")" + sign[s2] + fruits[d] + ")" + sign[s3] + fruits[z])
                      //  this.setData({
                        //  nums: "("+"(" + num + sign[s1] + fruits[k] + ")" + sign[s2] + fruits[d] +")"+ sign[s3]+ fruits[z]
                       // })
                      console.log('num的和',num)
                    }
                  }
                }
                }
              
              
              }
            }
   
          }
        }
   }

    console.log('打印和', arr)
    this.setData({
                         ids: arr
                       
                       })



  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  calculate:function(e){
   
  }
})