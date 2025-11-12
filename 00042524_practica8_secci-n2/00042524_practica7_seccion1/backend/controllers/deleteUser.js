
import { db } from '../data/conection.js';

export const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      return response.status(500).json({ error: error.message });
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};