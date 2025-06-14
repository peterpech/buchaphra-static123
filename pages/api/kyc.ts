import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, idNumber, address } = req.body;
  if (!name || !idNumber || !address) {
    res.status(400).json({ message: 'Missing fields' });
    return;
  }
  const filePath = path.join(process.cwd(), 'data', 'kyc.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const records = JSON.parse(jsonData);
    records.push({ id: Date.now().toString(), name, idNumber, address });
    await fs.writeFile(filePath, JSON.stringify(records, null, 2));
    res.status(200).json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ message: 'Could not save data' });
  }
}
