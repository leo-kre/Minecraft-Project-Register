import Link from "next/link";

export default function Header() {
      return (
            <div className="text-white text-xl px-10 h-24 backdrop-blur w-screen sticky top-0 z-10 flex justify-between items-center">
                  <Link href="/">Home</Link>
                  <Link href="/help">Hilfe</Link>
                  <Link href="/ticket">Ticket</Link>
            </div>
      );
}
