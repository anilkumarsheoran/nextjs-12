
import type { NextApiRequest, NextApiResponse } from 'next'

type UsersType = { id : Number}[]
const users: UsersType = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(users)
}