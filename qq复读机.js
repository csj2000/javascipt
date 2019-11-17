auto.waitFor();
setInterval(function(){
var oGroupName;
    
    if (!((oGroupName = id("title").find()).empty())) {
        
       var sGroupName = oGroupName[oGroupName.length-1].text()
       // var sGroupName="肛♂哲今天想和大家一起做爱心蛋糕"
        var aName = id("chat_item_nick_name").find();
        if (!aName.empty()&&! /[.\r\n]*b[.\r\n]*b[.\r\n]*a[.\r\n]*a/.test(aName[aName.length- 1])) {
            var Name = aName[aName.length- 1]
            var parent = Name.parent()
            var brother = parent.parent().children()
            for (var i = 0, item; item = brother[i++];) {
                if (item.id().split("/")[1] == "chat_item_content_layout") {
                    var messageBox = item;
                    break;
                }
            }
            if (typeof messageBox == "object") {
                if(global.LastmessageBox==undefined){
                    global.LastmessageBox=messageBox.hashCode()
                    } else {
                        if(global.LastmessageBox!=messageBox.hashCode()){
                          global.LastmessageBox=messageBox.hashCode()
          
                        } else {return;}
                    }
                var longClick=messageBox.longClick();
                if(!longClick) {
                    log("备用方案")
                    messageBox=messageBox.children().find(longClickable(true))
                    longClick=messageBox.longClick();
                }
                if (longClick) {
                    var item = null;
                    if ((item = id("name").text("转发").findOne(50)) != null) {
                        if (item.click()) {
                            var oGroupList = null
                            sleep(500)
                            if ((oGroupList = id("listView1").findOne(1500)) != null) {
                                var oRealGroup = null;
                                var loop=0;
                                while ((oRealGroup = text(sGroupName).findOne(1000)) == null) {
                                    if(!oGroupList.scrollForward()){
                                         log("第"+loop+"次尝试:"+sGroupName+"搜索失败");sleep(100);id("ivTitleBtnRightText").text("取消").findOne(1000).click();LastmessageBox=undefined;break;
                                    }
                                    sleep(150)
                                    if(++loop>=10) {
                                        log("this a bug")
                                        break;
                                    }
                                }
                                if(oRealGroup!=null) {
                                    if(oRealGroup.parent().click()) {
                                        if(id("dialogRightBtn").text("发送").findOne(100).click()) toastLog("复读成功");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    },1000);