
// var w=floaty.rawWindow(
//     <vertical>
//         <img src="file:///sdcard/netease/cloudmusic/网易云音乐相册/1.jpg" h="400"/>
//         <text text="茉莉聊天机器人" textColor="red" textSize="26sp" h="120"/>
//         <text text="请在下方输入你要说的话：" textSize="18sp" textStyle="italic" gravity="center"  h="40"/>
//         <input id="a" text="你好啊"   h="60"/>
//         <button id="b" text="发送"   h="60" />
//     </vertical>
// );
// setInterval(()=>{
// },1000);
// //w.setAdjustEnabled(true);
// w.setTouchable(true);
// ui.run(function(){
//     w.b.on("click",()=>{
//         toastLog(w.a.text());
//     })
// });

"ui";
ui.layout(
    <vertical>
        <img src="file:///sdcard/netease/cloudmusic/网易云音乐相册/1.jpg" h="400"/>
        <text text="聊天机器人" textColor="red" textSize="26sp" h="60" gravity="center" textStyle="italic"/>
        <text text="请在下方输入你要说的话：" textSize="18sp" textStyle="italic" gravity="center"  h="40"/>
        <input id="a" text="你好啊"   h="60"/>
        <button id="b" text="发送给茉莉" h="60"/>
        <button id="c" text="发送给图灵" h="60"/>
    </vertical>
)

ui.b.on("click",()=>{
    var che=ui.a.getText();
    threads.start(function(){
        var txt=moli(che);
        toastLog(txt);
    })
})

ui.c.on("click",()=>{
    var che=ui.a.getText();
    threads.start(function(){
        log(che);
        var txt=tuling(che);
        toastLog(txt);   
    })
})


// var che="你好啊";
// ui.b.on("click",()=>{
//     che=ui.a.getText();
//     log(che);
// });
// console.show();
// var name=console.rawInput("请先输入你的名字：");
// console.clear();
// log("ok,现在你可以跟小茉莉聊天了!");
// while(true)
// {
//     var che=console.rawInput("");
//     log(name+":"+che);
//     var dan =moli(che);
//     console.info("小茉莉:"+dan);
// }

function moli(talk){
    var url="http://i.itpk.cn/api.php"
    var r=http.post(url,{
    //key:"65458a5df537443b89b31f1c03202a80",
    "api_key":"bce74d2bbb15abb1160680748bc90219",
    "api_secret":"858198302",
    "question":talk
    });
    var txt=r.body.string();
    return txt;
};

function tuling(talk){
    var url="http://www.tuling123.com/openapi/api";
    var r=http.post(url,{
        "key":"20a6e848d7104f8db0cb5c722a2a9125",
        "info":talk
    });
    var txt=r.body.json().text;
    return txt;
}
