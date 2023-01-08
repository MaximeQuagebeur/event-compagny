import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <div className="topNav">
          <Link href="/">
            <Image
              src={"/images/logo_black.png"}
              width={50}
              height={50}
              alt={"logo"}
            />
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Lorem ipsum dolor sit, amet</p>
      </div>
    </header>
  );
}
