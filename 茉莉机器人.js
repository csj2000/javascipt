"auto";
console.show();
launchApp("QQ");
sleep(1000);

Text = "";
while (true) {
    var UIOB = className("android.widget.AbsListView").findOne();
    if (getEnd(UIOB)!=""&&getEnd(UIOB)!= Text) {
        Text = getEnd(UIOB);
        log(Text);
        var txt=TuringRobot(Text);
        input(txt);
        while(!click("发送"));
    };
};


function getEnd(UiObject) {
    try{        
    var sum = UiObject.childCount();
    if (sum) {
        var Object = UiObject.child(sum - 1);
        if (Object.className() == "android.widget.TextView") {
            return Object.text();
        } else {
            return getEnd(Object);
        };
    }else{return ""};
    }catch(e){
     return "";  
        };
};

function TuringRobot(message, id) {
    var url = "http://www.itpk.cn/openapi/api";
    var res = http.postJson(url, {
  
    key:"bce74d2bbb15abb1160680748bc90219",
    //secret:"858198302" ,
        info: message,
        userid: "1"
    });
    var txt = res.body.json().text;
    return txt;
};