import { redirect } from 'next/navigation';
import { signOutUser } from '../firebase';

export default async function Page() {
  const logout = async () => {
    "use server";
    const loggedOut = await signOutUser();

    if (loggedOut) {
      redirect('/');
    }
  }

  const back = async () => {
    "use server";
    redirect('/dashboard');
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div>Do you want to logout?</div>
            <div className="flex-auto w-full">

              <div className="my-3">
                <form action={logout}>
                  <button className="btn w-full">Logout</button>
                </form>
              </div>
              <div className="my-3">
                <form action={back}>
                  <button className="btn w-full">Go Back</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
