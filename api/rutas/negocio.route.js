const express=require('express');
const app=express();
const negocioRoutes=express.Router();

let Negocio=require('../modelos/Negocio');

negocioRoutes.route('/add').post(function (req, res){
    let negocio=new Negocio(req.body);
    negocio.save()
        .then(negocio => {
            res.status(200).json({'negocio':'negocio agregado correctamente!'});
        })
        .catch(err => {
            res.status(400).send("no se pudo grabar");
        });
});


negocioRoutes.route('/').get(function (req,res){
    Negocio.find(function(err,negocio){
        if(err){
            console.log(err);
        }else{
            res.json(negocio)
        }
    });
});

negocioRoutes.route('/edit/:id').get(function (req,res){
    let id=req.params.id;
    Negocio.findById(id, function(err, negocio){
        res.json(negocio);
    });
});

negocioRoutes.route('/update/:id').post(function (req,res){

    Negocio.findById(req.params.id, function(err, negocio){
        if(!negocio){
            return next(new Error('No se pudo cargar el documento'));
        }else{
            negocio.nombre_persona=req.body.nombre_persona;
            negocio.nombre_negocio=req.body.nombre_negocio;
            negocio.numero_gst_negocio=req.body.numero_gst_negocio;

            negocio.save().then(negocio=>{
                res.json('Actualizacion completa');
            })
            .catch(err=>{
                res.status(400).send("no se pudo actualizar la base de datos");
            });
        }
    });
});

negocioRoutes.route('/delete/:id').get(function(req,res){
    Negocio.findByIdAndRemove({_id: req.params.id}, function(err, negocio){
        if(err) res.json(err);
        else res.json('Eliminacion correcta');
    });
});

negocioRoutes.route('/test').get(function(){
    console.log('test!!');
});

module.exports=negocioRoutes;