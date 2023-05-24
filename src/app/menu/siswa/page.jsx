import Table from "@/app/Components/Table";

const getUser = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
};

export default async function Home() {
  const users = await getUser();
  return (
    <div>
      <Table users={users} />
    </div>
  );
}
