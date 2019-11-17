//随机循环n个方法，这里以3个为例
var mycars = new Array();
    mycars[0]=0;
//生成不重复全包含随机数组
function GAN(n) {
    for (var i=0;i<n;i++){ 
        k=Math.ceil(Math.random()*n);
        j=0;
        for (x in mycars){
            if(k==mycars[x]){
                j=1;
                break;
            }
        }
        if(j){
            i-=1;
            continue;
        }    
        mycars[i]=k;
    }
}
//执行不同方法
function EXM(x){
        switch(x)
    {
        case 1:
            F1();
            break;
        case 2:
            F2();
            break;
        case 3:
            F3();
            break;
    }
}
function F1(){
    log(1);
}
function F2(){
    log(2);
}
function F3(){
    log(3);
}
while(1){
GAN(3);
for(x in mycars){
    EXM(mycars[x]);
}
mycars=[];
}


