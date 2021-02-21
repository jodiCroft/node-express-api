import { v4 as uuidv4 } from "uuid";

let guests = [];

export const allGuests = (req, res) => {
  res.send(guests);
};

export const addGuest = (req, res) => {
  const guest = req.body;
  guests.push({ ...guest, id: uuidv4() });

  res.send(`Guest with the name ${guest.firstName} added to DB!`);
};

export const getGuest = (req, res) => {
  const { id } = req.params;

  const foundGuest = guests.find((guest) => guest.id === id);

  res.send(foundGuest);
};

export const deleteGuest = (req, res) => {
  const { id } = req.params;

  guests = guests.filter((user) => user.id !== id);

  res.send(`User with the id ${id} was deleted.`);
};

export const updateGuest = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  const guest = guests.find((user) => user.id === id);
  if (firstName) guest.firstName = firstName;

  if (lastName) guest.lastName = lastName;

  res.send(`User with the id ${id} has been updated`);
};
