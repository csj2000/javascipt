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
    var url = "http://www.tuling123.com/openapi/api";
    var res = http.postJson(url, {
       key: "20a6e848d7104f8db0cb5c722a2a9125",//绯色天空
       // key:"1c2514d9c9884931985b5bef1232fa24",
        //key: "65458a5df537443b89b31f1c03202a80", //图灵
    //key: "e0fcda33be9847c8b8534abe51b4b095", //唐嫣
    // key: "b4438ca194064134afa28f686fbd04a5", //my图灵
    //&api_key=bce74d2bbb15abb1160680748bc90219&api_secret=858198302 //  
   //  key:"0b5d8e351b714204b43174c2b065cb5e",
        info: message,
        userid: "1"
    });
    var txt = res.body.json().text;
    return txt;
};