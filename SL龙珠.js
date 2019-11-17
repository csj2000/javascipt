var img = images.read("/测图1.jpg");
var templ = images.read("/正义铠甲.jpg");
var p = findImage(img, templ);
if(p){
    toast("找到啦:" + p);
}else{
    toast("没找到");
}