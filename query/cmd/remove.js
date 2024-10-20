module.exports = (table, columns, all = false) =>{
    const query = `DELETE FROM ${table} WHERE ${columns};` 
    return (all == true)? client.query(`DELETE FROM ${table};`): client.query(query)
}