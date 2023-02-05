// For Plus
function increment(inDec,pcr,itm){
    var count= document.getElementById(inDec);
    var price= document.getElementById(pcr);
    var item= document.getElementById(itm);
    if(count.value>=5){
        count.value=5;
        alert('only 5 Product Allowed !');
    }else{
        count.value++;
        var result=parseInt(price.innerHTML)+parseInt(item.innerHTML);
        item.innerHTML=result;
    }
}
//for minus
function decrement(inDec,pcr,itm){
    var count = document.getElementById(inDec);
    var price= document.getElementById(pcr);
    var item= document.getElementById(itm);
    if(count.value<=0){
        count.value=0;
        alert('only minimum 1 Product Allowed !');
    }else{
        count.value--;
        var result=parseInt(item.innerHTML)-parseInt(price.innerHTML);
        item.innerHTML=result;
        
    }
}