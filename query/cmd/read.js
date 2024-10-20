module.exports = async (tables,columns, where="",limit=100) =>{
    const query = `SELECT ${columns} FROM ${tables} LIMIT ${limit}` 
    return where ? client.query(`SELECT ${columns} FROM ${tables} WHERE ${where} LIMIT ${limit}`) : client.query(query)
}