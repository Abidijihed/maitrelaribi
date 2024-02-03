const router= require("express").Router()
const ActControllers=require('../controllers/Actualiter')
router.post('/api/AddPoste',ActControllers.AddPost)
router.get('/api/GEtPost',ActControllers.GetPoste)
router.put('/api/Update',ActControllers.UpdatePost)
router.delete('/api/DeletePost',ActControllers.DeletePost)
module.exports ={ActRouter:router}