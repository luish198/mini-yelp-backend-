import express from 'express';
import getAll from '../controllers/cities.js';
import { getOneById, postNewCity } from '../controllers/cities.js';

const router = express.Router()

router.get('/',getAll)
router.get('/:id',getOneById)

//post test by LH
router.post('/',postNewCity)


export default router

