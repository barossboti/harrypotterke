fetch("https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json")
.then(x => x.json())
.then(y => megjelenit(y));
var tomb=[]

function megjelenit(y){
    console.log(y)
    var szoveg=""
    tomb=y
    var index=0;
    for (const elem of y) {
        szoveg+=`
        
        

        <div class ="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="kepek">
        <div class="felsonev">${elem.name}</div>
            <img src="${elem.image}" class="img-fluid kiskep" alt=""> 
        <button id="${index}" onclick="kattintas(this)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">${elem.name}
        </button>

            </div>
        </div>
`
index++
   
    }
document.getElementById("nevek").innerHTML=szoveg
}

function kattintas(gomb){
    //alert(gomb.id)
    document.getElementById("cim").innerHTML=tomb[gomb.id].name 
    document.getElementById("tartalom").innerHTML=`<img src="${tomb[gomb.id].image}"alt="" style="margin-bottom: 20px">
    <div>
    <b>Születési idő:</b> ${tomb[gomb.id].dateOfBirth}</div>
    <div>
    <b>Ház:</b>${tomb[gomb.id].house}</div>
    <div>
    <b>Patrónus:</b>${tomb[gomb.id].patronus}</div>
    <div>
    <b>Pálca anyaga:</b>${tomb[gomb.id].wand.wood}</div>
    <div>
    <b>Pálca közepe:</b>${tomb[gomb.id].wand.core}</div>`
}