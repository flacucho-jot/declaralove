const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function (){
    alert('Jaja ya sabía que dirías eso, bienvenida al paraiso bb')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%')
    noBtn.syle.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

