import Table from "@/app/Components/Table";

const getProfile = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const profile = await response.json();
  return profile;
};

const getRandomPict = async () => {
  const res = await fetch("https://randomuser.me/api/");
  const url = await res.json();
  return url.results[0].picture.large;
};
getRandomPict();
export default async function Profile({ params }) {
  const profile = await getProfile(params.name);
  const profpict = await getRandomPict();
  return (
    <div>
      <h1 className="text-center text-3xl my-5">Detail Profile</h1>
      <div className="grid grid-cols-3 grid-rows-4 w-3/5 gap-4 mx-auto mt-5">
        <div className=" bg-slate-100 rounded-md shadow-lg flex justify-evenly items-center py-5 col-start-1 col-end-3">
          <img
            src={profpict}
            alt=""
            className="rounded-full border-pink-600 w-20"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <h2>{profile.company.name}</h2>
          </div>
        </div>

        <div className="p-4 bg-slate-100 shadow-lg col-start-3 row-start-1 row-end-4 flex flex-col justify-evenly items-center rounder-md">
          <img
            src="https://img2.pngdownload.id/20180618/fqb/kisspng-computer-icons-timesheet-wordpress-clip-art-5b27edea72f9c2.945554591529343466471.jpg"
            alt=""
            className="rounded-full border-pink-600 w-20"
          />
          <div className="flex flex-col sel gap-3">
            <h2 className="font-bold text-2xl text-center">History Pemanggilan</h2>
            <ul class="list-decimal list-inside">
              <li>1 Januari  2023</li>
              <li>5 Januari 2023</li>
              <li>15 Januari 2023</li>
              <li>16 Januari 2023</li>
              <li>10 Februari 2023</li>
              <li>27 Februari 2023</li>
            </ul>
          </div>
        </div>

        <div className="p-4 bg-slate-100 shadow-lg col-span-2 row-start-2 row-end-4 flex flex-col rounder-md">
          <h1 className="m-2 text-2xl font-bold">Biodata</h1>
          <ul class="list-disc list-inside text-lg">
            <li>
              Alamat: {profile.address.street}, {profile.address.suite},{" "}
              {profile.address.city}
            </li>
            <li>Nomor Hp: {profile.phone}</li>
            <li>Absen: 6</li>
            <li>Izin: 4</li>
            <li>Eksull: {profile.company.catchPhrase}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
