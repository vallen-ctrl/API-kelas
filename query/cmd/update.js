module.exports = (tables,columns, values, search) =>{
    const query = `UPDATE ${tables} SET ${columns} = ${values} WHERE ${search}` 
    return client.query(query)
}