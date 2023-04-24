var p1Price =12000, p2Price =14000,p3Price =52000 , p4Price =2000, p5Price =5000;
function calTotal(){
var p1volume = document.getElementById('volume1').value;
var p2volume = document.getElementById('volume2').value;
var p3volume = document.getElementById('volume3').value;
var p4volume = document.getElementById('volume4').value;
var p5volume = document.getElementById('volume5').value;

document.getElementById('productTotal1').value=p1volume*p1Price;
document.getElementById('productTotal2').value=p2volume*p2Price;
document.getElementById('productTotal3').value=p3volume*p3Price;
document.getElementById('productTotal4').value=p4volume*p4Price;
document.getElementById('productTotal5').value=p5volume*p5Price;
}
function p1add(){
}
function p2add(){
}
function p3add(){
}
function p4add(){
}
function p5add(){    
}
function discount(){
     // total Price 
let p1total =Number( document.getElementById('productTotal1').value);
let p2total =Number( document.getElementById('productTotal2').value);
let p3total =Number( document.getElementById('productTotal3').value);
let p4total =Number( document.getElementById('productTotal4').value);
let p5total =Number( document.getElementById('productTotal5').value);
let total = p1total+p2total+p3total+p4total+p5total; 

   if(Number(total)>=50000 && Number(total)<=100000 ){
    // let discount = (Number(total)*(5/100))
    // document.getElementById('textres').innerHTML="Got 5% Discount : "+discount+" /-";
    // document.getElementById('text').innerHTML="Pay : "+(Number(total)-discount);
    let discount = (Number(total)*(5/100)) ; 
    document.getElementById('title').innerHTML="Got 5% Discount : "
    document.getElementById('textres').innerHTML=total+" /-";
    document.getElementById('text').innerHTML="Pay : "+(Number(total)-discount)+" /-";
    document.getElementById('save').innerHTML="Saving : "+discount+" /-";
   }
   else if(Number(total)>100000  && Number(total)<350000 ){
    // let discount = (Number(total)*(10/100))
    // document.getElementById('textres').innerHTML="Got 10% Discount : "+discount+" /-";
    // document.getElementById('text').innerHTML="Pay : "+(Number(total)-discount);
    let discount = (Number(total)*(8/100)) ; 
    document.getElementById('title').innerHTML="Got 8% Discount : "
    document.getElementById('textres').innerHTML=total+" /-";
    document.getElementById('text').innerHTML="Pay : "+(Number(total)-discount)+" /-";
    document.getElementById('save').innerHTML="Saving : "+discount+" /-";
   }
   else if(Number(total)>=350000 ){
    // let discount = (Number(total)*(12/100))
    // document.getElementById('textres').innerHTML="Got 12% Discount : "+discount+" /-";
    // document.getElementById('text').innerHTML="Pay : "+(Number(total)-discount);
    let discount = (Number(total)*(12/100)) ; 
    document.getElementById('title').innerHTML="Got 12% Discount : "
    document.getElementById('textres').innerHTML=total+" /-";
    document.getElementById('text').innerHTML="Pay : "+(Number(total)-discount)+" /-";
    document.getElementById('save').innerHTML="Saving : "+discount+" /-";
   }
   else{
    // document.getElementById('textres').innerHTML="Pay : "+total+" /-";
    // document.getElementById('text').innerHTML=" ";
    // let discount = (Number(total)*(5/100)) ; 
    // document.getElementById('textres').innerHTML=" ";
    document.getElementById('text').innerHTML="Pay : "+(Number(total))+" /-";
    // document.getElementById('save').innerHTML="Saving : "+discount+" /-";
   }
   document.getElementById('cir2').style.backgroundColor="green"
}
function cal(){
 // p1
 document.getElementById('c1Name').innerHTML="MiUi A6";
    document.getElementById('c1Price').innerHTML=p1Price+"/-";
    let p1volume = document.getElementById('volume1').value;
    document.getElementById('c1Quality').innerHTML=p1volume;

    // p2
    document.getElementById('c2Name').innerHTML="Mi A2";
    document.getElementById('c2Price').innerHTML=p2Price+"/-";
    let p2volume = document.getElementById('volume2').value;
    document.getElementById('c2Quality').innerHTML=p2volume;
// p3
document.getElementById('c3Name').innerHTML="Mi Laptop";
    document.getElementById('c3Price').innerHTML=p3Price+"/-";
    let p3volume = document.getElementById('volume3').value;
    document.getElementById('c3Quality').innerHTML=p3volume;

// p4
document.getElementById('c4Name').innerHTML="Mi Type-C Charger";
    document.getElementById('c4Price').innerHTML=p4Price+"/-";
    let p4volume = document.getElementById('volume4').value;
    document.getElementById('c4Quality').innerHTML=p4volume;
    // p5 
    document.getElementById('c5Name').innerHTML="Mi Smart Watch";
    document.getElementById('c5Price').innerHTML=p5Price+"/-";
    let p5volume = document.getElementById('volume5').value;
    document.getElementById('c5Quality').innerHTML=p5volume;
    // total Price 
let p1total =Number( document.getElementById('productTotal1').value);
let p2total =Number( document.getElementById('productTotal2').value);
let p3total =Number( document.getElementById('productTotal3').value);
let p4total =Number( document.getElementById('productTotal4').value);
let p5total =Number( document.getElementById('productTotal5').value);
let total = p1total+p2total+p3total+p4total+p5total;
document.getElementById('ctotal').innerText=total+" /-";
// When Empty input field 
if(p1volume==""){
    document.getElementById('c1Quality').innerHTML="-";
}
if(p2volume==""){
    document.getElementById('c2Quality').innerHTML="-";
}
if(p3volume==""){
    document.getElementById('c3Quality').innerHTML="-";
}
if(p4volume==""){
    document.getElementById('c4Quality').innerHTML="-";
}
if(p5volume==""){
    document.getElementById('c5Quality').innerHTML="-";
}

document.getElementById('progress-in').style.backgroundColor="green"; 
// document.getElementById('progress-in').style.breakAfter.height='100%';
}
function gpay(){
    document.getElementById('table').style.display="block";
    document.getElementById('payer').innerHTML="Google Pay" ; 
    document.getElementById('number').innerHTML="7492749126" ; 
    document.getElementById('upi').innerHTML="gpay@okiciax"; 
}
function ppay(){
    document.getElementById('table').style.display="block";
    document.getElementById('payer').innerHTML="Phone Pay" ; 
    document.getElementById('number').innerHTML="7673925842" ; 
    document.getElementById('upi').innerHTML="ppay@okiciax"; 
}
function ptm(){
    document.getElementById('table').style.display="block";
    document.getElementById('payer').innerHTML="Paytm" ; 
    document.getElementById('number').innerHTML="7492749126" ; 
    document.getElementById('upi').innerHTML="paytm@okiciax"; 
}
function cash(){
    document.getElementById('table').style.display="block";
    document.getElementById('payer').innerHTML="cash" ; 
    document.getElementById('number').innerHTML="-" ; 
    document.getElementById('upi').innerHTML="-"; 
}
function submit(){
    document.getElementById('cir3').style.backgroundColor="green";
    document.getElementById('proof').innerHTML="Thank You For Purchasing the Products";
}