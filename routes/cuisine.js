import express from 'express';
import getAll from '../controllers/cuisines.js';
import { getOneById} from '../controllers/cuisines.js';

const router = express.Router()

router.get('/',getAll)
router.get('/:id',getOneById)






export default router

