import { Inter } from "@next/font/google";
import Link from "next/link";
import Table from "./Components/Table";
const inter = Inter({ subsets: ["latin"] });

const getUser = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
};

export default async function Home() {
  const users = await getUser();
  return (
    <div>
      <div className="menu m-auto my-6 p-4 flex gap-7 justify-center">
        <Link
          className="bold text-lg bg-red-500 hover:bg-red-700 text-white p-2 rounded-sm"
          href="/menu/siswa"
        >
          Siswa
        </Link>
        <Link
          className="bold text-lg bg-red-500 hover:bg-red-700 text-white p-2 rounded-sm"
          href="/menu/peraturan"
        >
          Peraturan Sekolah
        </Link>
        <Link
          className="bold text-lg bg-red-500 hover:bg-red-700 text-white p-2 rounded-sm"
          href="/menu/dokument"
        >
          Dokument Penting
        </Link>
      </div>
      {/* <Table users={users} /> */}
    </div>
  );
}
