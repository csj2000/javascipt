"auto";

toast("开启指针才能画画");

setScreenMetrics(1080,1092);

var points = [10000];

var interval = 0.1;

var x0 = 540;

var y0 = 1000;

var a = 400;

for( var t = 0; t < 2*Math.PI; t += interval)
    {
        var x = x0 + a*(Math.cos(t));
        var y = y0 + a*(Math.sin(t));
        points.push([parseInt(x) , parseInt(y)]);
    }

gesture.apply(null , points);



