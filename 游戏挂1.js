
requestScreenCapture();
var a,b,c,d,img;
for(;;)
{
 img = captureScreen();
 sleep(300);
 a=images.pixel(img, 373, 1231);
 b=images.pixel(img, 373, 1409);
 c=images.pixel(img, 880, 1231);
 d=images.pixel(img, 880, 1409);
if(colors.isSimilar
(a, b,30)||
colors.isSimilar
(c, d,30))
{press(222,1600,1);
}else{press(860,1600,1);}
}

