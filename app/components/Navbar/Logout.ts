import { redirect } from 'next/navigation';
import { getUser, signOutUser } from '../../firebase';

export async function Logout() {

  // check if the user is logged in
  const user = await getUser();

  // if the user is logged in then logout and redirect
  if (!user) {
    redirect('/');
  }
}