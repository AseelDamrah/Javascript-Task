//Q1
var sol1Btn= document.getElementById('sol1');
sol1Btn.onclick= function(){
    var input=window.prompt("Enter number :");
    var output="Output number is "+input;
    window.document.getElementById('demo').innerHTML=output;
}

// Q2

var sol2Btn= document.getElementById('sol2');
sol2Btn.onclick= function(){
    var input=window.prompt("Enter number :");
    var inNum =Number(input);

if(inNum%3==0 && inNum%4==0){
    window.document.getElementById('demo2').innerHTML="yes";
}
else{
    window.document.getElementById('demo2').innerHTML="no"; 
}
}


//Q3

var sol3Btn= document.getElementById('sol3');
sol3Btn.onclick= function(){
    var input1=window.prompt("Enter number1 :");
    var inNum1 =Number(input1);
    
    var input2=window.prompt("Enter number2 :");
    var inNum2 =Number(input2);
    
    if(inNum1>inNum2){
        window.document.getElementById('demo3').innerHTML=inNum1;
    }
    else{
        window.document.getElementById('demo3').innerHTML=inNum2;
    }
}

//Q4
var sol4Btn= document.getElementById('sol4');
sol4Btn.onclick= function(){
    var input =window.prompt("Enter number :");
    var inNum =Number(input);

if(inNum>0){
  window.document.getElementById('demo4').innerHTML="Positive";
}
else if(inNum<0){
    window.document.getElementById('demo4').innerHTML="Negative";
}
else{
    window.document.getElementById('demo4').innerHTML="zero";
}
}

//Q5
var sol5Btn= document.getElementById('sol5');
sol5Btn.onclick= function(){
 var input1 =window.prompt("Enter number1 :");
var inNum1 =Number(input1);

var input2 =window.prompt("Enter number2 :");
var inNum2 =Number(input2);

var input3 =window.prompt("Enter number3 :");
var inNum3 =Number(input3);

var str1="Max element = ";

if(inNum1>inNum2 && inNum1>inNum3){
    window.document.getElementById('demo5').innerHTML=str1+inNum1;
}
else if(inNum2>inNum1 && inNum2>inNum3){
    window.document.getElementById('demo5').innerHTML=str1+inNum2;
}
else{
    window.document.getElementById('demo5').innerHTML=str1+inNum3;
}

var str2="Min element = ";

if(inNum1<inNum2 && inNum1<inNum3){
    window.document.getElementById('demo52').innerHTML=str2+inNum1;
}
else if(inNum2<inNum1 && inNum2<inNum3){
    window.document.getElementById('demo52').innerHTML=str2+inNum2;
}
else{
    window.document.getElementById('demo52').innerHTML=str2+inNum3;
}
}

//Q6
var sol6Btn= document.getElementById('sol6');
sol6Btn.onclick= function(){
    var input1 =window.prompt("Enter number1 :");
    var inNum1 =Number(input1);

if(inNum1%2==0){
    window.document.getElementById('demo6').innerHTML="even";
}
else{
    window.document.getElementById('demo6').innerHTML="odd";
}
}

//Q7
var sol7Btn= document.getElementById('sol7');
sol7Btn.onclick= function(){
    var inChar =window.prompt("Enter character :");


if(inChar=='a' || inChar=='i' || inChar=='e' || inChar=='o' || inChar=='u' || inChar=='A' || inChar=='I' 
|| inChar=='E' || inChar=='O' || inChar=='U' ){

    window.document.getElementById('demo7').innerHTML="vowel";
}
else{
    window.document.getElementById('demo7').innerHTML="Consonant";
}
}

//Q8
var sol8Btn= document.getElementById('sol8');
sol8Btn.onclick= function(){
    var num =window.prompt("Enter num:");

    var inNum = Number(num);
    var outNum=" ";
    
    for(var i=1;i<=inNum;++i){
      if(i<inNum){
      outNum= outNum+i+", ";
    }
     else{
      outNum= outNum+i;
     }
    }
    window.document.getElementById('demo8').innerHTML=outNum;
}

//Q9
var sol9Btn= document.getElementById('sol9');
sol9Btn.onclick= function(){
    var num =window.prompt("Enter num:");

var inNum = Number(num);
var outNum=" ";
var result;

for(var i=1;i<=12;++i){
  result =inNum *i;
   outNum=outNum+result+" ";
 
}
window.document.getElementById('demo9').innerHTML=outNum;
}

//Q10
var sol10Btn= document.getElementById('sol10');
sol10Btn.onclick= function(){
    var num =window.prompt("Enter num:");

    var inNum = Number(num);
    var outNum=" ";
    
    
    for(var i=1;i<=inNum;++i){
      
      if(i%2==0){
        outNum=outNum+i+" ";
      }
    
    }
window.document.getElementById('demo10').innerHTML=outNum;
}

//Q11
var sol11Btn= document.getElementById('sol11');
sol11Btn.onclick= function(){
    var num =window.prompt("Enter num:");
var power=window.prompt("Enter power :");

var inNum = Number(num);
var inPower= Number(power);
var result=1;

for(var i=1;i<=inPower;++i){
  
  result*=inNum ; 
}
window.document.getElementById('demo11').innerHTML=result;
}

//Q12
var sol12Btn= document.getElementById('sol12');
sol12Btn.onclick= function(){
    var sum=0;

    for(var i=1;i<=5;++i){
      var num=window.prompt("Enter Marks of five subjects:");
      sum+= Number(num);
    
    }
    window.document.getElementById('demo12').innerHTML="Total marks = "+sum;
    var avg=sum/5;
    window.document.getElementById('demo122').innerHTML="Average Marks = "+avg;
    
}

//Q13
var sol13Btn= document.getElementById('sol13');
sol13Btn.onclick= function(){
    var month=window.prompt("Month Number:");
    month=Number(month);
    var days;
    
    if(month==1 || month==3 || month==5 || month==8 || month==7 || month==10 || month==12  ){
      days=31;
    }
    else if(month==2){
      days=28;
    }
    else{
      days=30;
    }
    window.document.getElementById('demo13').innerHTML="Days in Month: "+ days;
    
}

//Q14
var sol14Btn= document.getElementById('sol14');
sol14Btn.onclick= function(){
    var sum=0;
var grad;
  for(var i=1;i<=5;++i){
    var mark=window.prompt("subject mark : ");
    mark=Number(mark);
    sum+=mark;
  }
  var per=sum/5;
  if(per>=90){
    grad="A";
  }
  else if(per>=80){
    grad="B";
  }
  else if(per>=70){
    grad="C";
  }
  else if(per>=60){
    grad="D";
  }
  
  else if(per>=40){
    grad="E";
  }
  else{
    grad="F";
  }
  window.document.getElementById('demo14').innerHTML="Percentage = "+per+"% -->"+" Grad "+grad;
    
}


//Q15
var sol15Btn= document.getElementById('sol15');
sol15Btn.onclick= function(){
   
var month=window.prompt("Enter Month : ");
var days;
month=Number(month);

switch(month){
 
  case 2: days=28;
  break;

  case 4: 
  case 6: 
  case 9:
  case 11:  
  days=30;
  break;

  default: days=31;

}
    window.document.getElementById('demo15').innerHTML="num of days : "+days;
    
}

//Q16
var sol16Btn= document.getElementById('sol16');
sol16Btn.onclick= function(){
    var charac=window.prompt("Enter character : ");
    switch(charac){
    
      case 'i': 
      case 'I': 
      case 'a':
      case 'A':  
      case 'o':
      case 'O':   
      case 'u':  
      case 'U': 
      case 'e':
      case 'E':  
      window.document.getElementById('demo16').innerHTML="vowel";
      break;
    
      default: window.document.getElementById('demo16').innerHTML="not vowel";
    }
}

//Q17
var sol17Btn= document.getElementById('sol17');
sol17Btn.onclick= function(){
    var num1=window.prompt("Enter num1");
    var num2=window.prompt("Enter num2");
    
    num1=Number(num1);
    num2=Number(num2);
    
    switch(num1>num2){
    
      case true: window.document.getElementById('demo17').innerHTML="max num : "+num1;
      break;
    
      default: window.document.getElementById('demo17').innerHTML="max num : "+num2;
    }
    
}


//Q18
var sol18Btn= document.getElementById('sol18');
sol18Btn.onclick= function(){
    var num1=window.prompt("Enter num1 : ");
    num1=Number(num1);
    switch(num1%2){
    
      case 0: window.document.getElementById('demo18').innerHTML="even";
      break;
    
      default: window.document.getElementById('demo18').innerHTML="odd";
    }
    
}

//Q19
var sol19Btn= document.getElementById('sol19');
sol19Btn.onclick= function(){
    var num1=window.prompt("Enter num1 : ");
    num1=Number(num1);
switch(num1>=0){
  case false: window.document.getElementById('demo19').innerHTML="negative";
  break;

  default: switch(num1){
   case 0: window.document.getElementById('demo19').innerHTML="zero";
   break;

   default:window.document.getElementById('demo19').innerHTML="positive";
  }
}
}

//Q20
var sol20Btn= document.getElementById('sol20');
sol20Btn.onclick= function(){
    var num1=window.prompt("Enter num1 : ");
var op=window.prompt("Enter operation : ");
var num2=window.prompt("Enter num2 : ");
num1=Number(num1);
num2=Number(num2);
var result;
switch(op){
  case '+':
    result=num1 + num2;
    window.document.getElementById('demo20').innerHTML=num1+"+"+num2 +" = "+result;
  break;

  case '-':
    result=num1 - num2;
    window.document.getElementById('demo20').innerHTML=num1+"-"+num2+" = "+result;
  break;

  case '*':
    result=num1 * num2;
    window.document.getElementById('demo20').innerHTML=num1+"*"+num2+" = "+result;
  break;

   default:
    result=num1 / num2;
    window.document.getElementById('demo20').innerHTML=num1+"/"+num2+" = "+result;
}
}