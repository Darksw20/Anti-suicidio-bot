'use strict';
const axios = require('axios');

function detector(data){
    return new Promise(function(resolve,reject){
        switch(data){
            case 'Soy un fracaso':
                resolve('Hola, estoy aquí para ti. ¿Podrías decirme qué te hace pensar eso?')
            break;
            case 'No puedo hacer nada bien':
                resolve('Siento mucho que te estés sintiendo de esa manera. Estoy aquí si me necesitas.')
            break;
            case 'La vida no tiene sentido':
                resolve(`¿Quieres hablar sobre eso? Estoy aquí para cuando me necesites.`)
            break;
            case 'Me siento cansado todo el tiempo':
                resolve(`Hola, aquí van algunas cosas que podrían haber causado eso:
                1.- ¿Tomaste alguna bebida con cafeína?
                2.- ¿Has estado fumando o bebiendo alcohol?
                3.- ¿No has realizado ejercicio?
                4.- ¿Tu trabajo te estresa?
                5.- ¿Padeces de anemia o diabetes?
                De no ser así escríbeme de nuevo. 
                `)
            break;
            case 'Tengo dolor de cabeza seguido':
                resolve(`Aquí van algunos tips:
                Descansa un poco de la luz que tengas alrededor.
                Toma algo con cafeína. 
                Toma agua. 
                Quitar cualquier cosa que pueda realizar presión sobre tu cabeza.
                De no notar ningún cambio en 30 mins. Escríbeme para intentar ayudarte. 
                `)
            break;
            case 'No tengo hambre':
                resolve(`De acuerdo, aquí hay una cosas que puedes hacer:
                1.- Intenta comer al menos un poco, así podrás estimular tu apetito. Trata que no sea grasosa.
                2.- Realiza algo de ejercicio.
                3.- Intenta comer en un lugar donde regularmente no lo harías.
                `)
            break;
            default:
                resolve(`No lo haga compa =c`)
            break;
        }
    })
    .catch(e=>console.error("utilities Promise "+e))
}

function memes(data){
    return new Promise(function(resolve,reject){
        axios.get('https://api.imgflip.com/get_memes')
        .then(resp=>{
            
            resolve(resp.data.data.memes[0].url)
        })
        .catch(e=>reject(console.error("meme "+e)))
    })
    .catch(e=>console.error("memes Promise "+e))
}

module.exports = {
    detector: detector,
    memes: memes
}