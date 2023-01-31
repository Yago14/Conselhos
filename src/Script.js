const advice = document.querySelector("#advice");
const paragrafo = document.querySelector("#menssagem");
const btn = document.querySelector("#btn");
const card = document.querySelector(".card")
const pause = document.querySelector("#pause")

// pegar elementos




// gerando um id aleatorio 
const random = () => {
      id = Math.floor(Math.random() * 220)
     

}
pause.addEventListener("click",()=>{
      card.classList.add("fechado")
})

// criar botao que gera a messagem
btn.addEventListener("click", () => {
      random()
      card.classList.remove("fechado")



const pegarInformacoes = () => {
      fetch(`https://api.adviceslip.com/advice`)
            .then(response => response.json().then(response => {
               

                  let id = response.slip.id;

                  const menssagem = response.slip.advice;


                  advice.innerHTML =`<h4>advice # ${id} </h4>`
                  paragrafo.innerHTML =`<p>"${menssagem}"</p>` 




            }))

}
pegarInformacoes()

})



