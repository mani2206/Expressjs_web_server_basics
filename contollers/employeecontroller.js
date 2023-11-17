data ={}
data.employee =require('../model/employee.json')


const getAllEmployee = (req,res)=>{
    res.json(data.employee)
  }

const createNewEmployee =(req,res)=>{
    res.json({
        "firstname":req.body.firstname,
         "lastname":req.body.lastname 
    })
}
const updateEmployee = (req,res)=>{
    res.json({
        "firstname":req.body.firstname,
         "lastname":req.body.lastname 
    })
}

const deleteEmployee =(req,res)=>{
    res.json({
        "id":req.body.id
      })
}
const getEmployee = (req,res)=>{
    res.json({
        "id":req.body.id
      })
}

module.exports = {
    getAllEmployee,createNewEmployee,updateEmployee,deleteEmployee,getEmployee
}