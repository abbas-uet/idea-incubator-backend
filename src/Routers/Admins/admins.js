const express = require('express');
const router = express.Router();
const db=require('../../models');
const adminController=require('../../Controllers/AdminController/AdminController');

//getting all the admins
router.get('/view_admins',adminController.getAll);

//Creating an Admin
router.post('/create_admin',adminController.create);

//Getting an Admin Data
router.get("/view_admin/:id", adminController.findOne);

// Update an Admin with id
router.put("/update_admin/:id", adminController.update)

// Delete an Admin with id
router.delete("/delete_admin/:id", adminController.delete);

// Delete all Admins
router.delete("/delete_all", adminController.deleteAll);


//getting id of last Element
router.get("/getLastId", adminController.getLastId);

//getting the Department Associated with admin
router.get("/view_admin_departments/:id", adminController.getOneAdminDepartment);

//getting all the Department Associated with admin
router.get("/get_all_admin_departments", adminController.getAllAdminDepartment);

//getting all the Department Associated with admin
router.get("/get_admin_fullname", adminController.getAllAdminName);


module.exports=router;

