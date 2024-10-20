module.exports = (table,columns, datatype) =>{
    const query = `ALTER TABLE IF EXISTS ${table} ADD COLUMN ${columns} ${datatype}` 
    return client.query(query)
}