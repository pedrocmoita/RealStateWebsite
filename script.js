//typing effect
var i = 0;
text =  " Copyright | Pedro Moita | 2022 ";
function typing_effect(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing_effect, 100);
    }
}
typing_effect();

//coordenates
window.addEventListener('mousemove', function(e){
    this.document.getElementById('x').textContent = e.x;
    this.document.getElementById('y').textContent = e.y;
});


var loader = document.querySelector(".loader");
window.addEventListener('load', vanish);

function vanish(){
    loader.classList.add("disapear")
}