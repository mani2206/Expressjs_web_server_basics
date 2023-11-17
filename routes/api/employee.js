const express = require('express');
const path = require('path');
const router =express.Router();
const employeeController =require('../../contollers/employeecontroller')

router.route('/')
      .get(employeeController.getAllEmployee)
      .post(employeeController.createNewEmployee)
      .put(employeeController.updateEmployee)
      .delete(employeeController.deleteEmployee)
      router.route('/:id')
             .get(employeeController.getEmployee)
module.exports = router;