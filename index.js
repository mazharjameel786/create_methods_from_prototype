let name2="usman jamil ";
//title case
sentance_case=function () {
    
   let arr =this.toLowerCase().split(' ');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join(' ');
}
String.prototype.sentance_case=sentance_case;
console.log(name2.sentance_case());

//word list

String.prototype.words = function(){
 
	return this.split(/[ ]{1,}/);
}
console.log(name2.words());


//++++++++++++******
let arr1=[];
Array.prototype.range = function(iStart,iEnd){
	var newRange = [];
 
	for (var i = iStart; i <= iEnd; i++) {
		newRange.push(i);
	};
	return newRange
}
console.log(arr1.range(1,9));