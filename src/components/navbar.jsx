import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/career", label: "Career" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <section className="sticky top-0 z-[100] border-b border-slate-200/80 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="w-full px-6 sm:px-8 xl:px-24">
        <div className="navbar bg-transparent py-5">
        <div className="flex-1">
          <Link
            href="/"
            aria-label="CalDev home - Heical Chandra Syahputra portfolio"
            className="btn btn-ghost font-black text-nigger text-2xl"
          >
            CalDev<p className="font-black text-biru text-2xl">●</p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-nigger text-[15px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hidden md:block">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="z-50 md:hidden">
              <details>
                <summary>Menu</summary>
                <ul className="right-0 mt-2 w-44 rounded-2xl border border-slate-200 bg-base-100 p-2 shadow-lg">
                  {navItems.map((item) => (
                    <li key={`mobile-${item.label}`}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
