let x=0;
f_name = document.form.name.value
f_email = document.form.email.value
f_radio = document.form.radio.value
f_query = document.form.query.value

function form_validation (thisForm)
{
checked = true;

document.getElementById("form_div").style.display="none";
// Input Validation
if ( document.form.name.value == "" ){
	alert ( "Name cannot be empty" );
	checked = false;
}
if ( document.form.email.value == "" ){
	alert ( "Email cannot be empty" );
	checked = false;
}
if ( document.form.query.value == "" ){
	alert ( "Query cannot be empty" );
	checked = false;
}
if ( ( document.form.radio[0].checked == false )&& ( form.radio[1].checked == false )&& ( form.radio[2].checked == false )){
	alert ( "Select a query type" );
	checked = false;
}

//Form Preview
if (checked==true){	
	test.style.color="white"; 
	document.getElementById("test").innerHTML="Name: "+document.form.name.value+"<br>"+"Email: "+document.form.email.value+"<br>"+"Subject: "+getRadioValue(thisForm)+"<br>"+"Details: "+document.form.query.value+"<br><br>";
	if (x!=1){
//Button creation	
		let edit_bt=document.createElement("button");	  
		edit_bt.innerText="Edit";	  
		document.body.appendChild(edit_bt);    
		edit_bt.onclick= buttonEdit; 
		edit_bt.id="button_id";
	
		var submit_bt=document.createElement("input");
		submit_bt.style.top="100px";
		submit_bt.setAttribute("type","submit");      
		submit_bt.setAttribute("id","submit_id");       
		submit_bt.setAttribute("value","Send Mail");
		submit_bt.setAttribute("form","myform");       
		document.body.appendChild(submit_bt);         
	}
	x=1;
	document.getElementById("button_id").style.visibility="visible"; 
	document.getElementById("submit_id").style.visibility="visible"; 
	edit_bt.onclick= buttonEdit;
	
}		
return checked;
}              
//Function to check radio value
function getRadioValue( radioArray ) {
	for (let i=0; i < radioArray.length;i++){
		if ( radioArray[i].checked ){
			return radioArray[i].value;
		}
	}
	return "";
}

function buttonEdit(){
		document.getElementById("form_div").style.display="block";
		document.getElementById("test").innerHTML="";
		document.getElementById("button_id").style.visibility="hidden";
		document.getElementById("submit_id").style.visibility="hidden"; 
		
		return "";
		
		}