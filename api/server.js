const express=require('express'),
    path=require('path'),
    bodyParser=require('body-parser'),
    cors=require('cors'),
    mongoose=require('mongoose'),
    config=require('./DB');

    const negocioRoutes=require('./rutas/negocio.route');
    mongoose.Promise=global.Promise;
    mongoose.connect(config.DB,{ useNewUrlParser: true}).then(
        ()=> {console.log('Database conectada')},
        err => { console.log('No se puede conectar a la database '+err)}
    );

    const app=express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/negocio',negocioRoutes);
    const port = process.env.PORT || 4000;

    const server=app.listen(port,function(){
        console.log('Listening en puerto '+port);
    });

