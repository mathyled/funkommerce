const {conn} = require('./src/db.ts')
const {PORT} = process.env
import server from './src/app'

conn.sync({force: true}).then(()=>{
    server.listen(PORT, ()=>{
        console.log(`server listenning ${PORT}`)
    })
})