var express = require('express')
var bodyParser = require('body-parser')
const pg = require('pg');

app=express()
app.use(bodyParser.json())

port = process.env.PORT || 3000 ;

route = express.Router()
app.use('/api',route)
 
const connectionString = 'postgres://vilmos@localhost:5432/postgres';
const client = new pg.Client(connectionString);
client.connect();

route.route('/ttp').get(function(req,res){
  
    client.query("select * from ttp;")
    .then(function(result,err){
        if(err) console.log(err)

        res.send(result['rows'])

    }).catch((error) => {
        console.log(error,'Promise error');
    }) 
})

route.route('/ttp').post(function(req,res){
    if(req.body){
        client.query('insert into ttp( id,tool,tactic_id,technique_id,author,location_id,approved,created) values(default,$1,$2,$3,$4,$5,$6,now());',
        [req.body.tool,req.body.tactic_id,req.body.technique_id,req.body.technique_id,req.body.author,req.body.location_id,req.body.approved]) 
        .then(function() {
            res.status(200).json({
                    status: 'success',
                    message: 'TTP added'
            });
            
        }).catch((error) => {
            console.log(error,'Promise error...');
        })  
    }else{
        console.log("Body doesnt exists.")
    }
})
/////////////////////////////////////////////////////////////

route.route('/report').get(function(req,res){
  
    client.query("select * from report;")
    .then(function(result,err){
        if(err) console.log(err)

        res.send(result['rows'])

    }).catch((error) => {
        console.log(error,'Promise error');
    }) 
})

route.route('/report').post(function(req,res){
    if(req.body){
        client.query('insert into report( id,source,ticket,approved,author,location_id,approved,created) values(default,$1,$2,$3,$4,now());',
        [req.body.source,req.body.ticket,req.body.approved,req.body.author]) 
        .then(function() {
            res.status(200).json({
                    status: 'success',
                    message: 'Report added'
            });
            
        }).catch((error) => {
            console.log(error,'Promise error...');
        })  
    }else{
        console.log("Body doesnt exists.")
    }
})



route.route('/tactic').get(function(req,res){
  
    client.query("select * from tactic;")
    .then(function(result,err){
        if(err) console.log(err)

        res.send(result['rows'])

    }).catch((error) => {
        console.log(error,'Promise error');
    }) 
})
route.route('/tactic').post(function(req,res){
    if(req.body){
        client.query('insert into tactic( id,name,ticket,author,location_id,approved,created) values(default,$1,$2,$3,$4,$5,now());',
        [req.body.name,req.body.ticket,req.body.author,req.body.location_id,req.body.approved]) 
        .then(function() {
            res.status(200).json({
                    status: 'success',
                    message: 'Tactic added'
            });
            
        }).catch((error) => {
            console.log(error,'Promise error...');
        })  
    }else{
        console.log("Body doesnt exists.")
    }
})

route.route('/technique').get(function(req,res){
  
    client.query("select * from technique;")
    .then(function(result,err){
        if(err) console.log(err)

        res.send(result['rows'])

    }).catch((error) => {
        console.log(error,'Promise error');
    }) 
})
route.route('/technique').post(function(req,res){
    if(req.body){
        client.query('insert into technique( id,name,platform,source) values(default,$1,$2,$3);',
        [req.body.name,req.body.platform,req.body.source]) 
        .then(function() {
            res.status(200).json({
                    status: 'success',
                    message: 'Technique added'
            });
            
        }).catch((error) => {
            console.log(error,'Promise error...');
        })  
    }else{
        console.log("Body doesnt exists.")
    }
})


app.get('/',function(req,res){
      
})


app.listen(port,function(){

    console.log('Runing'+port)

})


module.exports=app