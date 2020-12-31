let kamanda = [
    
]
let j,adding,deling
let i=0;
while(true){
    x=prompt('Kamanda ')
    
    if(x=='add' ){
        adding=prompt('Kmni qoshamiz')
        kamanda.push(adding)
    }else if(x=='del'){
        deling=prompt('Kimni chopamz')
        for(key in kamanda){
            if(deling == kamanda[key]){
                kamanda.splice(key,1)
            }
        }
    }else if(x =='stop') break
    console.log(kamanda);
}

