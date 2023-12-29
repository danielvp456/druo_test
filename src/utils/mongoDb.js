import {connect, connection} from 'mongoose'

const conn = {
    isConnected: false
}

export async function connectDb(){
    if(conn.isConnected) return;
    
    const db = await connect('mongodb+srv://danielvp456:LRYkiR7xtjhit2aL@cluster0.ettfkq6.mongodb.net/?retryWrites=true&w=majority')
    conn.isConnected = db.connections[0].readyState
}

connection.on('connected', () => {
    console.log('db is connected');
})

connection.on('error', (err) => {
    console.log('db is not connected', err);
})