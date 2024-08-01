function add()
{
    let select=document.querySelector(".choose-inp").value;
    let nam=document.querySelector(".name-inp").value;
    let amt=document.querySelector(".amount-inp").value;
    if (select!=="" && nam!=="" && amt!=="")
    {
        let table=document.querySelector(".table");
        let row=document.createElement("tr")
        let data1=document.createElement("td")
        let data2=document.createElement("td")
        let data3=document.createElement("td")
        let data4=document.createElement("td")
        let del=document.createElement("button")
        del.innerText="Delete"
        del.onclick=function(){
            row.remove()
        }
        data1.innerText=select
        data2.innerText=nam
        data3.innerText=amt
        data4.appendChild(del)
        row.appendChild(data1)
        row.appendChild(data2)
        row.appendChild(data3)
        row.appendChild(data4)
        row.classList.add(".th")
        table.appendChild(row)
        document.querySelector(".choose-inp").value="";
        document.querySelector(".name-inp").value="";
        document.querySelector(".amount-inp").value="";
    }
    else
    {
        alert("All fields required!")
    }
}
