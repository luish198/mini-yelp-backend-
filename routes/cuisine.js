import express from 'express';
import getAll from '../controllers/cuisines.js';
import { getOneById, getFilter } from '../controllers/cuisines.js';

const router = express.Router()

router.get('/',getAll)
router.get('/:id',getOneById)


//filter test by LH
router.get('/filter/',getFilter)



export default router

