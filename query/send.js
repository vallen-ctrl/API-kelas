module.exports = (status,succed, message="", data={}) =>{
    const value = {
        status: status,
        succed: succed,
        message: message,
        time_requset: new Date(Date.now()),
        data: data
    }
    return value
}