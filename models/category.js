const conn = require("../config/database")

const category = {
    getAll : (cb)=>{
        conn.query("SELECT * FROM `danh_muc` ORDER BY `ten_danh_muc` ASC",(err,results)=>{
            if(err){
               return cb(err)
            } else{
               return cb(null,results);
            }
    
        })
    },
    find : (id,cb)=>{
        conn.query(`SELECT * FROM danh_muc WHERE id = ?`,[id],(err,results)=>{
            if(err){
                return cb(err)
            } else{
                return cb(null,results[0]);
            }
    
        })
    },
   create : (data,cb)=>{
    conn.query(`INSERT INTO danh_muc(ten_danh_muc) VALUES ('${data.ten_danh_muc}')`,(err,results)=>{
        if(err){
            return cb(err)
        } else{
            return cb(null,results);
        }
    })
   }
}
module.exports = category;