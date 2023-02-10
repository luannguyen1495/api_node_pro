const conn = require("../config/database")

const category = {
    getAll : (cb)=>{
        let sql = "SELECT san_pham.*,danh_muc.ten_danh_muc FROM san_pham JOIN danh_muc ON san_pham.ma_danh_muc = danh_muc.id";
        conn.query(sql,(err,results)=>{
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
    // console.log(data);
    conn.query(`INSERT INTO san_pham SET ?`,data,(err,results)=>{
        if(err){
            return cb(err)
        } else{
            return cb(null,results);
        }
    })
   }
}
module.exports = category;