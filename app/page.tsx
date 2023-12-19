import { redirect } from 'next/navigation';
import { loginUser, getUser } from './firebase';

export default async function Home() {
  // check if the user is logged in
  const user = await getUser();
  if (user) {
    redirect('/dashboard');
  }

  const login = async (email: string, password: string) => {
    "use server";
    const user = await loginUser(email, password);

    if (user) {
      redirect('/dashboard');
    }
  }

  const handleLoginSubmit = async (formData: FormData) => {
    "use server";
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await login(email, password);
  }

  const loginUser1 = async () => {
    "use server";
    const email = process.env.USER1EMAIL;
    const password = process.env.USER1PASSWORD;
    await login(email as string, password as string);
  }

  const loginUser2 = async () => {
    "use server";
    const email = process.env.USER2EMAIL;
    const password = process.env.USER2PASSWORD;
    await login(email as string, password as string);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">DViz</h1>
          <p className="py-6">Interactive Data Visualization Dashboard</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form
              action={handleLoginSubmit}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  autoComplete="off"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex-auto w-full">
              <div className="my-3">
                <form action={loginUser1}>
                  <button className="btn w-full">Login as User1</button>
                </form>
              </div>
              <div className="my-3">
                <form action={loginUser2}>
                  <button className="btn w-full">Login as User2</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
