const Task = require('../../models/Task');

module.exports = {
    deleteTask : (req,res,next)=>{
        Task.deleteOne({_id:req.params.id, creator: req.userData.userId })
        .then(
            (result)=>{
                if(result.deletedCount > 0)
                res.json({
                    status:{
                        message:"successfully",
                        code: 201
                    }
                });
                else{
                    res.status(401).json({
                        status:{
                            message: "Auth Failed",
                            code: 401
                        }
                    });
                }
            }
        ).catch(e=>{
            res.status(500).json({
                status:{
                    message: e.message,
                    code: 500
                }
            })
        })
    }  
}