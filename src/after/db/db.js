var mysql = require('mysql');
var db = mysql.createConnection({
    connectionLimit: 10,
    host     : 'localhost',
    user     : 'root',
    database : 'goods'
});

module.exports = {
    select:function(_sql,_callback){
        db.query(_sql,function(error,results,fields){
            if(error){
                _callback({status: false,error: error})
            } else {
                _callback({status: true, data:{results, fields}});
            }
        })
    },
    delete:function(){},
    insert:function(){},
    update:function(){},
}