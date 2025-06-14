import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const filePath = path.join(process.cwd(), 'data', 'kyc.json');

  if (req.method === 'POST') {
    const { name, idNumber, address } = req.body;
    if (!name || !idNumber || !address) {
      res.status(400).json({ message: 'Missing fields' });
      return;
    }
    try {
      const jsonData = await fs.readFile(filePath, 'utf-8');
      const records = JSON.parse(jsonData);
      records.push({
        id: Date.now().toString(),
        email: session.user!.email,
        name,
        idNumber,
        address,
      });
      await fs.writeFile(filePath, JSON.stringify(records, null, 2));
      res.status(200).json({ status: 'ok' });
    } catch (err) {
      res.status(500).json({ message: 'Could not save data' });
    }
  } else if (req.method === 'GET') {
    try {
      const jsonData = await fs.readFile(filePath, 'utf-8');
      const records = JSON.parse(jsonData);
      const record = records.find((r: any) => r.email === session.user!.email);
      res.status(200).json({ record });
    } catch (err) {
      res.status(500).json({ message: 'Could not read data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
