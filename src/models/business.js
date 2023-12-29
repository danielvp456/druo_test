import {Schema, model, models} from 'mongoose'

const businessSchema = new Schema({
    id:{
        type: String,
        autoIncrement: true,
    },
    name:{
        type: String,
        required: [true, 'Error en el campo del negocio'],
        unique: [true, 'Error en el campo del negocio'],
        trim: true,
    },
    nit:{
        type: Number,
        trim: true,
    },
    mail:{
        type: String,
        trim: true,
    }
})

export default models.Business || model('Business', businessSchema)