module.exports = (table,columns, values) =>{
    const query = `INSERT INTO ${table}(${columns}) VALUES (${values});` 
    console.log(query)
    return client.query(query)
}