"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'

function NavItem({ label, url }: { label: string, url: string }) {
  const pathname = usePathname();
  return <div className={pathname === url ? " bg-accent" : ""}>
    <Link href={url} passHref>
      {label}
    </Link>
  </div>
}

const TopNavbar = ({ userid }: { userid: string }) => {
  return (

    <div className="navbar bg-base-100 z-10 flex-auto justify-between shadow-md rounded-lg">

      <div className="hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavItem label={"Dashboard"} url={"/dashboard"} />
          </li>
          <li>
            <NavItem label={"Data Pipeline"} url={"/datapipeline"} />
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                Menu
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <NavItem label={"Dashboard"} url={"/dashboard"} />
                </li>
                <li>
                  <NavItem label={"Data Pipeline"} url={"/datapipeline"} />
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="">
        <a className="btn btn-ghost text-xl">DViz</a>
      </div>
      <div className="mx-3">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                {userid ?? ""}
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <NavItem label={"Logout"} url={"/logout"} />
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div >



  );
};

export default TopNavbar;
