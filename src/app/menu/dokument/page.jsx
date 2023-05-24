import Image from "next/image";
import React from "react";

const Dokumen = () => {
  return (
    <div>
      <div className="card m-auto my-8 rounded-sm gap-5 items-center flex flex-col p-5 w-fit bg-red-100">
        <Image src="/email.png" height={50} width={50} />
        <p>Download surat kamu di tombol bawah ini 👇</p>
        <a
          className="bold text-lg bg-red-500 hover:bg-red-700 text-white p-2 rounded-sm"
          href="/home/wonderkid/Desktop/panda-bk/public/permintaan-maaf.docx"
          download
        >
          Surat Permintaan Maaf
        </a>
      </div>
    </div>
  );
};

export default Dokumen;
