import Link from "next/link";

export default function Table({users}) {
  return (
    <div>
      <table className="table-auto m-auto mt-16">
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
            <td>Company</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <Link
                    className="text-blue-800 underline p-3"
                    href={`/profile/${user.id}`}
                  >
                    Go to Profile
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
