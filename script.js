esconder = document.querySelectorAll('.esconder')


const mostrar = ()=>{
    esconder.forEach(e =>{
        altura = e.getBoundingClientRect().top
        if(altura < 430){
            e.classList.add("ativo1")
        }else{
            e.classList.remove("ativo1")
        }
    })
   
    
}
addEventListener('scroll',mostrar)

/*dsadsadasd*/

titulo = document.querySelectorAll('h4')
sumir = document.querySelectorAll('.sumir')

 /*function aparecer(){
     this.nextElementSibling.classList.toggle('ativo')
 }

titulo.forEach(e=>{
    e.addEventListener('click',aparecer)
})*/

/*function activ(index){
    sumir.forEach(e=>{
        e.classList.remove('ativo')
    })
    sumir[index].classList.add('ativo')
}

titulo.forEach((item,posicao) =>{
    item.addEventListener('click', ()=>{
        activ(posicao)
    })
})*/



modal = document.querySelector('.modal')
botao = document.querySelector('.botao')
fechar = document.querySelector('.fechar')

botao.onclick = (e)=>{
    e.preventDefault()
    modal.classList.add('ativo2')
}

fechar.onclick = ()=>{
    modal.classList.remove('ativo2')
}


