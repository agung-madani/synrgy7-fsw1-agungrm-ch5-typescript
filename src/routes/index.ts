import express from 'express';
import peopleRouter from './peopleRouter';
import { data } from '../data';

const router = express.Router();

router.use('/people', peopleRouter);

router.get('/', (req, res) => {
  res.json({ message: 'Success', data });
});

export default router;
