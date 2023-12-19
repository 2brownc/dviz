import { redirect } from 'next/navigation';
import { getUser, signOutUser } from '../../firebase';

export default async function page() {
  // check if the user is logged in
  const user = await getUser();
  if (!user) {
    redirect('/');
  }

  return (
    <div>Data Pipeline</div>
  )
}
