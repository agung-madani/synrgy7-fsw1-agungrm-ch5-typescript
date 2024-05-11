import express from 'express';
import { getPeople, getPeopleById, createPerson, updatePerson, deletePerson } from '../services/peopleService';

const router = express.Router();

router.get('/', getPeople);
router.get('/:id', getPeopleById);
router.post('/', createPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;
