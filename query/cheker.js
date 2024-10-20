class cheker {
    isAlphabetonly(str = []) {
        const regex = /[^a-zA-Z]/;
        for(let i in str){
            if(regex.test(str[i])){
                return false
            }
        }
        return true
    }
    isNumberonly(str = []){
        const regex = /^\d+$/;
        for(let i in str){
            if(!regex.test(str[i])){
                return false
            }
        }
        return true
    }
}


module.exports = cheker