fetch("test.json")
.then(Response => Response.json())
.then(data=>showInfo(data));

function showInfo(data){
    console.log(data.countries);
}
showInfo();