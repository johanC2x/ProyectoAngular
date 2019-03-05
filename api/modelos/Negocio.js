const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Negocio=new Schema({
    nombre_persona: {type: String},
    nombre_negocio: { type: String },
    numero_gst_negocio:{ type: Number}
},{
    collection: 'negocio'
});

module.exports=mongoose.model('Negocio',Negocio);






