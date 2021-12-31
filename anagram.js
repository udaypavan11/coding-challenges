function anagramCheck(uday, pavan){
    let obj1 = {}, obj2 = {}
    for(const i in uday){
        if(obj1.hasOwnProperty(uday[i])){
        obj1[uday[i]] = obj1[uday[i]]++
        }else{
            obj1[uday[i]] = 1
        }
    } 
    for(const i in pavan){
        if(obj2.hasOwnProperty(pavan[i])){
        obj2[pavan[i]] = obj2[pavan[i]]++
        }else{
            obj2[pavan[i]] = 1
        }
    } 
    console.log(obj1,obj2)
    if(JSON.stringify(obj1) == JSON.stringify(obj2)){
        console.log('true')
    }else{
        console.log(false)
    }
}

anagramCheck('kkj','jkk')