import express from 'express';
import getAll, { getOneByName } from '../controllers/restaurants.js'
import {getOneById, postNewRestaurant} from '../controllers/restaurants.js'


const router = express.Router()


router.get('/',getAll)
router.get('/:id',getOneById)
router.get('/cuisine/:names',postNewRestaurant)

//post test by LH

router.post('/',getAll)



export default router

