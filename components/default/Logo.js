import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <p className="text-xl font-semibold text-blue-700 mr-[160px]">
        Mindmap Flow
      </p>
    </Link>
  );
};

export default Logo;
