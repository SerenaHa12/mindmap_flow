import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/service", name: "Service" },
    { path: "/price", name: "Price" },
    { path: "/contact", name: "Contact" },
    { path: "/mindmap", name: "Mind Map" }
  ];

  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {

        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize: ${linkStyles}`}
          >
            {link.path === pathname && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
