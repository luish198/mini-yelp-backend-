import express from 'express';
import getAll, { getOneByName } from '../controllers/restaurants.js'
import {getOneById, postNewRestaurant, getFilter,getAllByCity} from '../controllers/restaurants.js'


const router = express.Router()


router.get('/',getAll)
router.get('/:id',getOneById)
router.get('/cuisine/:names',getOneByName)
router.get('/cities/:name',getAllByCity)



//filter test by LH
router.get('/1',getFilter)

//post test by LH

router.post('/',postNewRestaurant)



export default router

