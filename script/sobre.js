async function readJson() {
    try{

        fetch('../data/sobre.json').then(response => {
            return response.json()
        }).then(response => {
            let name = document.createElement('p')
            let curso = document.createElement('p')
            let work = document.createElement('p')

            name.innerText = `Nome: ${response.name}`
            curso.innerText = `Curso: ${response.curso}`
            work.innerText = `Trabalho Atual: ${response.actualWork}`
            
            let card = document.querySelector('.infoCard')

            card.appendChild(name)
            card.appendChild(curso)
            card.appendChild(work)
        })

    }catch(err){
        console.log(err)
    }
    
}

window.onload = () => {
    readJson()
}