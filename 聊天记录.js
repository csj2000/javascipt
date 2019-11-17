
toast("请打开无障碍服务");
auto.waitFor();
setScreenMetrics(1080, 1920);
//console.show();
launchApp("QQ");
sleep(1000);
startqq("1715578186");
sleep(100);
desc("聊天设置").findOne(2000).click();
desc("聊天记录").findOne(2000).parent().click();
sleep(100);
for(j=0;j<3;j++)
{
for(i=0;i<3;i++)
{
var UIOB = className("android.widget.AbsListView").findOne(2000);
a=getTxt(UIOB);
//log(a);

}
swipe(500,200,500,1700,100);
a+=a;
}
startqq("1715578186");
log(a);
sleep(1000);
input(a);
while(!click("发送"));
engines.stopAll();

function getTxt(UiObject)   
{
    var sum=UiObject.childCount();
    if(sum)
    {
        var object=UiObject.find(className("android.widget.TextView"));
        var txt="开始";
        object.forEach(function(tv){
            if(tv.text()!="")
            {
                // log(tv.text());
                txt=txt+tv.text()+" ";
                //log(txt);
            }
            
        })
    }
    return txt;
}

function startqq(qq)
{
    app.startActivity({
    action: "android.intent.action.VIEW",
    data:"mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin="+qq,
    packageName: "com.tencent.mobileqq",
    });
}