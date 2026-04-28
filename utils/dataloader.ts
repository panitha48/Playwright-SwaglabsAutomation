import fs from 'fs';
import path from 'path';
import env from '../config/env';
import { User } from '../models/User'

export function getUsers(): User[] {
  const filePath = path.resolve(env.usersFile);
  const data = fs.readFileSync(filePath, 'utf-8');
  const jsonData=JSON.parse(data);
   // Convert JSON → POJO objects
  return jsonData.map((u: any) =>
    new User(u.username, u.password,u.valid)
  );
}