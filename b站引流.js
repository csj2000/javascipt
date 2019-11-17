// "ui";
// ui.layout(
//     <vertical>
//         <img src="file:///sdcard/netease/cloudmusic/网易云音乐相册/1.jpg" h="400"/>
//         <text text="聊天机器人" textColor="red" textSize="26sp" h="60" gravity="center" textStyle="italic"/>
//         <text text="请在下方输入你要说的话：" textSize="18sp" textStyle="italic" gravity="center"  h="40"/>
//         <input id="a" text="你好啊"   h="60"/>
//         <button id="b" text="发送给茉莉" h="60"/>
//         <button id="c" text="发送给图灵" h="60"/>
//     </vertical>
// )

// ui.b.on("click",()=>{
//     var che=ui.a.getText();
//     threads.start(function(){
//         var txt=moli(che);
//         toastLog(txt);
//     })
// })

// ui.c.on("click",()=>{
//     var che=ui.a.getText();
//     threads.start(function(){
//         log(che);
//         var txt=tuling(che);
//         toastLog(txt);   
//     })
// })

toastLog("请确保打开悬浮窗以及无障碍权限");
sleep(1000);
console.show();
setScreenMetrics(1080,1920);
var h=device.height;
var w=device.width;
launch("tv.danmaku.bili");
sleep(100);
while(currentPackage()!="tv.danmaku.bili");
toastLog("已到b站");


    id("tab_text").text("频道").findOne().click();
    sleep(100);
    var obj1=id("name").text("动画").findOnce();
    while(obj1==null)
    {
       swipe(500,1700,500,800,100);
       obj1= id("name").text("动画").findOne(1000);
    }
    obj1.click();
    sleep(100);
    id("tab_title").text("MAD·AMV").click();
    sleep(100);
    id("order_select").idHex("idHex = 0x7f0911b2").findOnce().click();
    sleep(100);
    id("order_newest").text("最新视频").findOnce().click();
    sleep(100);
    for(i=0;i<10;i++)
    {
        obj=className("android.support.v7.widget.RecyclerView").scrollable().findOnce();
        if(obj!=null)
        {
            obj.children().forEach(function(child){
                if(child.className()=="android.widget.RelativeLayout")
                {
                    child.click();
                    sleep(1000);
                    id("recommend_num").text("点赞").click();
                    sleep(10);
                    id("tab_title").text("评论").click();
                    sleep(100);
                    input("剪的很好,加油!");
                    while(!click("发布"));
                    id("tab_title").text("简介").click();
                    sleep(100);
                    text("关注").findOne().parent().parent().click();
                    sleep(100);
                    id("chat").text("发消息").click();
                    sleep(100);
                    input("新人Up向你求助!!!真诚希望你能来新人UP聚集QQ群:660675430 来陪我们这些没人要的新人UP主一起玩耍,谢谢了!");
                    id("send_text").findOne().click();
                    desc("转到上一层级").findOne().click();
                    desc("转到上一层级").findOne().click();
                    desc("转到上一层级").findOne().click();
                }
            });
        }else(toastLog("没找到控件,出错啦!"))
        swipe(w/2,h*0.9,w/2,h*0.2,100);
        sleep(100);
    }
    toastLog("本次点击已全部完成");

