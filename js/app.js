let elsPlus = document.querySelector('.caunting-add')
let elsMinus = document.querySelector('.counting__split')
let elsCounting = document.querySelector('.caunting-number')

elsPlus.addEventListener('click', function(){
    elsCounting.textContent = +elsCounting.textContent + 1
});

counting__split.addEventListener('click', function(){
    if(elsCounting.textContent > 0){
        elsCounting.textContent = +elsCounting.textContent -1
    } else {
        elsCounting.textContent = 0;
    }
});