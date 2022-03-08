
const setLocalStorage=(key,value)=>{

    if(!key){
        throw new Error("There is no key");
        
    }else{

        localStorage.setItem(key,JSON.stringify(value))

    }

}

const getLocalStorage=(key)=>{

    const data=localStorage.getItem(key)

    if(!data)throw new Error("The kwy does not exist")

    return JSON.parse(data);
}

const removeLocalStorage=(key)=>{
    localStorage.removeItem(key)
}

export const Storage={
    set:setLocalStorage,
    get:getLocalStorage,
    remove:removeLocalStorage
}