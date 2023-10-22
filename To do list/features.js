const inputdata = document.getElementById("input-box");
const thelist = document.getElementById("list");
function Addtask()
{
    if(inputdata.value === '')
    {
        alert("Enter a task");
    }
    else{
        let li = document.createElement("li"); //to create a new html element
        li.innerHTML = inputdata.value;
        thelist.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputdata.value="";
    savedata();
}


thelist.addEventListener("click", function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
},
false);



function savedata()
{
    localStorage.setItem("data", thelist.innerHTML);
}

function showTask()
{
    thelist.innerHTML = localStorage.getItem("data");
}