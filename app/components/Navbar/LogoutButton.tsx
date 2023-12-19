'use server';

import { Logout } from './Logout';

export default async function LogoutButton() {
  return <form action={Logout}>
    <button type="submit">Logout</button>
  </form>
}