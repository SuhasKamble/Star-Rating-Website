const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');
const nextBtn = document.querySelector(".next");

for(let i=0;i<stars.length;i++){
    stars[i].starValue = i+1;
    ["click","mouseover","mouseout"].forEach(function(e){
        stars[i].addEventListener(e,showRating);
    })
}


function showRating(e){
    let type = e.type;
    let starValue = this.starValue;

    if(type=='click'){
        if(starValue > 0){
            output.innerHTML = `You rated this ${starValue} star`
        }
    }
    stars.forEach(function(ele,ind){
        if(type==='click'){
            if(ind<starValue){
                ele.classList.add("orange")
                
            }
            else{
                ele.classList.remove("orange")
            }
        }

        if(type=='mouseover'){
            if(ind<starValue){
                ele.classList.add("yellow");
            }else{
                els.classList.remove("yellow");
            }
        }

        if(type=='mouseout'){
            if(ind<starValue){
                ele.classList.remove("yellow");
            }
        }
    })
}


nextBtn.addEventListener('click',()=>{
    window.location.reload()
})