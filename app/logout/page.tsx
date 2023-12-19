import { redirect } from 'next/navigation';
import { signOutUser } from '../firebase';

export default async function Page() {
  "use server";
  const loggedOut = await signOutUser();

  if (loggedOut) {
    redirect('/');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>Logging out...</div>
    </div>
  )
}
