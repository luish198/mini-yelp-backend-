import express from 'express';
import {getFilter} from '../controllers/filters.js'


const router = express.Router()


//filter test by LH
router.get('/',getFilter)





export default router

