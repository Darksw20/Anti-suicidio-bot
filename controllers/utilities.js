'use strict';

function detector(data){
    return new Promise(function(resolve,reject){
        console.log("Esto dije:"+data)
    })
}

module.exports = {
    detector: detector
}