document.querySelector("#selectMoeda").addEventListener('change', (ev) => {
    getInfoCoin(ev.target.value)
})


async function getInfoCoin(coin){

    try {
        
        if(coin == "") return

        let url = `https://economia.awesomeapi.com.br/json/last/${coin}`

        console.log(url)

        fetch(url).then((response) =>{
        
            if(!response.ok) throw response.statusText
            console.log(response)

            return response.json()
        }).then((data) => {
            let arrayProps = Object.keys(data)

            return data[arrayProps[0]]
        }).then((infoCoin) => {
            console.log(infoCoin)

            let div = document.querySelector('#cardInfoMoeda')
            let divInfo = document.querySelector('#divInfoMoeda')
            let p = document.createElement('p')

            if (div.style.display == "none") div.style.display = "flex"

            let coinBrl = formatCoin(infoCoin.bid, infoCoin.code)

            p.innerText = `1.00 ${infoCoin.code} = ${coinBrl} ${infoCoin.codein}`

            p.style.marginBottom = '0'
            p.className = "fs-3"

            divInfo.innerHTML = ""

            divInfo.appendChild(p)
        })

    } catch (error) {
        console.log(error)
    }
}

function formatCoin(valCoin, code){


    if(code == "BTC"){
        let formatCoinValue = ''
        valCoin.split('.').forEach((c) => formatCoinValue += c)
        return formatCoinValue         
    }else{
        let floatVal = parseFloat(valCoin)

        return floatVal.toFixed(2)
    }
}