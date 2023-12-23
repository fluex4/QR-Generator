let search = document.getElementById("text");
let qr = document.getElementById("img");
let a = document.getElementById("qrd");

function generate(){
    search.value=search.value.trim();
    if(search.value==""){
        search.classList.add("error");
        setTimeout(()=>{
            search.classList.remove("error");
        },500);
    }
    else{
        let url=`https://quickchart.io/qr?text=${search.value}&format=png`;
        qr.src=url;
    }
    
}