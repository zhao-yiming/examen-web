var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'AAaa@@11',
    database:'appartement'
});
connection.connect(function(error){if(error)console.log(error)});
let pieceModel=require('../models/pieceModel');

let message='';
let roomName='';
let largeur=0;
let longueur=0;
module.exports.affiche=function(req,res){res.render('piece.ejs',{roomName:roomName,largeur:largeur,longueur:longueur, message:message})}

let pieceListe=[];
module.exports.save=function(req,res){
    roomName =req.body.piece;
    largeur=req.body.largeur;
    longueur=req.body.longueur;

    let piece=new pieceModel(roomName,largeur,longueur);
    pieceListe.push(piece);
    connection.query("INSERT INTO rooms (name,length,width) VALUES (?,?,?)",[roomName,largeur,longueur],function(err,result){});
    console.log(pieceListe);
    res.redirect('/show');
    
}

module.exports.consult=function(req,res){
    roomName=req.body.piece;
    largeur=parseInt(req.body.largeur);
    longueur=parseInt(req.body.longueur);
    message='Surface:  '+largeur*longueur;
    res.render('piece.ejs',{roomName:roomName,largeur:largeur,longueur:longueur,message:message})
}
