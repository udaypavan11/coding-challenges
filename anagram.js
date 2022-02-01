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


'{[()]}'

9

str1 = aakb   primary
str2 = cab    anagram str1

str1 obj = {
    a: {
        read: undefined,
        count : 2
    },
    k:{
        read: undefined,
        count : 2
    },
    b:{
        read: undefined,
        count : 1
    }
}

str2obj = {
    c:{
        read: true,
        count: 1
    },
    a:{
        read: undefined,
        count : 2
    },
    b:{
        read: undefined,
        count : 1
    }
}

operations on second string:
ab
aba

abc,cbb



=TEXT(44193+(WEEKNUM(U10,2)-1)*7,"YYYY/MM/DD")


=_xlfn.IFS(YEAR(V10)=9999,"#VALUE!",YEAR(V10)=2021,TEXT(44193+(WEEKNUM(V10,2)-1)*7,"YYYY/MM/DD"),YEAR(V10)=2022,TEXT(44557+(WEEKNUM(V10,2)-1)*7,"YYYY/MM/DD"))


