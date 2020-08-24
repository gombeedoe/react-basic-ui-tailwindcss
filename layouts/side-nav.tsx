import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/ui/modal", label: "modal" },
];

export default function SideNav() {
  return (
    <nav className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
      {links.map(({ href, label }, index) => (
        <Link href={href} key={`${href}${label}`}>
          <a
            className={`block text-lg text-gray-700 hover:text-gray-900${
              index !== 0 ? " mt-2" : ""
            }`}
          >
            {label}
          </a>
        </Link>
      ))}
    </nav>
  );
}
