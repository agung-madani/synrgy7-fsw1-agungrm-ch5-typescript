import { data } from '../data';
import { Request, Response } from 'express';

const getPeople = (req: Request, res: Response) => {
  res.json({ message: 'Success', data });
};

const getPeopleById = (req: Request, res: Response) => {
  const { id } = req.params;
  const person = data.find(p => p.id === parseInt(id, 10));
  if (person) {
    res.json({ message: 'Success', data: person });
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

const createPerson = (req: Request, res: Response) => {
  const { id, name, username, email } = req.body;
  const newPerson = { id, name, username, email };
  data.push(newPerson);
  res.status(201).json(newPerson);
};

const updatePerson = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, username, email } = req.body;
  const personIndex = data.findIndex(p => p.id === parseInt(id, 10));
  if (personIndex !== -1) {
    data[personIndex] = { ...data[personIndex], name, username, email };
    res.json(data[personIndex]);
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

const deletePerson = (req: Request, res: Response) => {
  const { id } = req.params;
  const personIndex = data.findIndex(p => p.id === parseInt(id, 10));
  if (personIndex !== -1) {
    const deletedPerson = data.splice(personIndex, 1);
    res.json({ message: 'Success', dataDeleted: deletedPerson[0] });
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

export {
  getPeople,
  getPeopleById,
  createPerson,
  updatePerson,
  deletePerson
};
