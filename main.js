var arrText =[];
	var arrDay =[];
	var arrTime =[];
 
	var newArrText =[];
	var newArrDay =[];
	var newArrTime =[];
 
	function addTask() {
		var text = form.task.value;
		var day = form.days.value;
		var time = form.hours.value;
 
		arrText.push(text);
		arrDay.push(day);
		arrTime.push(time);  
 
		for (var i = 0; i < arrText.length - 1; i ++) {
		 
		}
		document.querySelector("#info").innerHTML+="<div class=\"blockTask\"><input type=\"button\" onclick=\"dellTask("+i+")\" value=\"X\"><input type=\"button\" onclick=\"doneTask("+i+")\" value=\"выполнено\"><h2>"+arrText[i]+"</h2><div><p>"+arrDay[i]+ "</p><p>"+arrTime[i]+ "</p></div></div>";  
	}
	 
	function dellTask(i){
		arrText.splice(i,1);
		arrDay.splice(i,1);
		arrTime.splice(i,1);  
		document.querySelector("#info").innerHTML="";
 
	  for (var i = 0; i < arrText.length; i ++) {
			document.querySelector("#info").innerHTML+="<div class=\"blockTask\"><input type=\"button\" onclick=\"dellTask("+i+")\" value=\"X\"><input type=\"button\" onclick=\"doneTask("+i+")\" value=\"выполнено\"><h2>"+arrText[i]+"</h2><div><p>"+arrDay[i]+ "</p><p>"+arrTime[i]+ "</p></div></div>";
	  }
	}
 
	function doneTask(i) {
		newArrText.push(arrText[i]);
		newArrDay.push(arrDay[i]);
		newArrTime.push(arrTime[i]);
 
		dellTask(i);

		for (var j = 0; j < newArrText.length - 1; j ++) {
			 
		}
		document.querySelector("#info2").innerHTML+="<div class=\"blockTask2\"><h2>"+newArrText[j]+"</h2><div><p>"+newArrDay[j]+ "</p><p>"+newArrTime[j]+ "</p></div></div>";		 
	}