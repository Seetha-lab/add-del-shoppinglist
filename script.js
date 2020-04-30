var button = document.getElementById("button");
var input = document.getElementById("input");
var ul=document.querySelector("ul");
var lilist = document.querySelectorAll("#ullist li");
var buttonlist = document.querySelectorAll("#ullist li button");


button.addEventListener("click",addclickevent);
input.addEventListener("keypress",addkeypressevent);

for(i=0;i<lilist.length;i++)
{
	lilist[i].addEventListener("click",toggleevent);
}

for(i=0;i<buttonlist.length;i++)
{
   buttonlist[i].addEventListener("click",deletebutton);
}

function adddelbutton(li)
{
var delbutton=document.createElement("button");
delbutton.appendChild(document.createTextNode("Delete"));
li.appendChild(delbutton);
buttonlength = updatelilength();
delbutton.setAttribute("id","button"+Number(buttonlength));
delbutton.addEventListener("click",deletebutton);
return;
}


function deletebutton(e)
{
    e.target.parentElement.remove();	
   	return;
}


function toggleevent(event)
{
	event.target.classList.toggle("done");
	return;
}


function updatelilength()
{
	return document.querySelectorAll("li").length;
}


function checkinput(){
	return input.value.length;

}

function addevent(){

var li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
lilength = updatelilength();
li.setAttribute("id","li"+Number(lilength));
input.value="";
adddelbutton(li);
li.addEventListener("click",toggleevent);
}

function addclickevent(){
  if (checkinput() > 0)
  {
  	addevent();
  }
}

function addkeypressevent(event){

 if (checkinput() > 0 && event.keyCode === 13)
  {
  	addevent();
  }

}
