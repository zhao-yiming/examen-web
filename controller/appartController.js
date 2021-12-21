var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'AAaa@@11',
    database:'appartement'
});

connection.connect(function(error){if(error)console.log(error)});

let message='';
let roomName='';
let largeur=0;
let longueur=0;
module.exports.retour=function(req,res){res.render('piece.ejs',{roomName:roomName,largeur:largeur,longueur:longueur, message:message})}

module.exports.show=function(req,res){
    connection.query("select*from rooms;",function(error,result){
    if (error)console(error);
    res.render('appartement.ejs',{rooms:result})}
)};
