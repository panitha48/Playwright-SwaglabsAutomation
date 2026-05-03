import fs from 'fs';
import path from 'path';
import { ENV } from '../config/env';

export function getUsers() {
  const filePath = path.resolve(`test-data/validusers.${ENV}.json`);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}