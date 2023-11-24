const stars = document.querySelector('.stars');
const star = document.querySelectorAll('.ri-star-line');
let filled = 0;
const rating = document.querySelector('.spn');

stars.addEventListener('click',(e)=>{
let currclicked =e.target.dataset.index;
for(let i=0;i<filled;i++){
  star[i].classList.remove('active')
}
for(let i=0;i<currclicked;i++){
  star[i].classList.add('active')
}
filled=currclicked
rating.innerHTML = currclicked;
})
stars.addEventListener('mouseover',(e)=>{
let currclicked =e.target.dataset.index;
for(let i=0;i<filled;i++){
  star[i].classList.remove('active')
}
for(let i=0;i<currclicked;i++){
  star[i].classList.add('active')
}

})
stars.addEventListener('mouseleave',(e)=>{

for(let i=0;i<5;i++){
  star[i].classList.remove('active')
}
for(let i=0;i<filled;i++){
  star[i].classList.add('active')
}

})
