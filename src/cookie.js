var Cookie = {
        setCookie:function(key,value,time){
          var date = new Date();
          date.setDate(date.getDate()+time);

          document.cookie = key+"="+value+"; expires="+date.toUTCString();
        },

        delCookie:function(key){
          //必须保证路径统一
          this.setCookie(key,"",-1);
        },
        getCookie:function(key){
          var all = document.cookie.split("; ");
          for(var i=0;i<all.length;i++){

            var item = all[i].split("=");
            if(item[0]==key){
              return item[1];
            }
          }
        }
}

export default Cookie