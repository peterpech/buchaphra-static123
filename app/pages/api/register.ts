import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  const { name, email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Missing fields' });
    return;
  }
  const filePath = path.join(process.cwd(), 'app', 'data', 'users.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const users = JSON.parse(jsonData);
  if (users.find((u: any) => u.email === email)) {
    res.status(409).json({ message: 'User already exists' });
    return;
  }
  const newUser = { id: Date.now().toString(), name: name || '', email, password };
  users.push(newUser);
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  res.status(200).json({ id: newUser.id });
}
