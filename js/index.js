var i=0,text;
text="Foundation Course General Studies 2023 & 2024"

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing()