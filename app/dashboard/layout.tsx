import TopNavbar from '../components/Navbar';
import { getUserEmail } from '../firebase';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const email = await getUserEmail();
  return (
    <section>
      <nav><TopNavbar userid={email.split('@')[0]} /></nav>
      <main>{children}</main>
    </section>
  )
}