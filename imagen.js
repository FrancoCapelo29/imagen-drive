console.log("Start")

let url= prompt("Ingrese la url");
//https://drive.google.com/file/d/14HllhVLwFrXROUXrXmpuav2OToZzSoMp/view?usp=sharing
let menos="";
let Ini=0;
let Fin=0;

for(let i=0;i<url.length;i++){

    if( url.substring(i,i+2)=== "d/"){
        Ini=i+2;
    }

    if(url.substring(i,i+2)=== "/v"){
        Fin=i;   

    }
}

menos = url.substring(Ini, Fin);
console.log("Resultado del string: "+ menos);

let doc = document.createElement("img");
let cadena = 'https://drive.google.com/uc?export=view&id=' + menos;
//doc.src='https://drive.google.com/uc?export=view&id=${res}';
console.log("resultado del string:" +menos+ "url completa:"+ cadena);

doc.src=cadena;
let docu = document.getElementById("ruta");
docu.appendChild(doc);