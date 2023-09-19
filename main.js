let size=parseInt(prompt("Enter the length of the array"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+arr+" ]<br><br>");

//function
function duplicate(){
var b=[];
var temp=[];
var del=parseInt(prompt("enter the position you want to delete"));

for(let i=0;i<arr.length;i++){
	if((i+1)==del){
		b.push(arr[i]);
	}
	else{
		temp.push(arr[i]);
	}
}
	return [temp,b];
}

var res=duplicate();
document.write("new array is "+res[0]);
document.write("<br><br> deleted number is "+res[1]);
