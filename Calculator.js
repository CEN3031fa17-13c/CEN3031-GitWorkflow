function add(){
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1+v2).toString());
}

function subtract(){
	//Implement this
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1-v2).toString());
}

function multiply(){
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1*v2).toString());
	
	
}

function divide(){
	//Implement this
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	console.log( "hello");
	alert("Result= " + (v1/v2).toString());
	
	
}
		
function pow(){
	//Implement this
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1**v2).toString());
}