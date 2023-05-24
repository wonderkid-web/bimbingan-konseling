import "../app/css/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1 className="text-4xl bg-red-500 text-white text-center py-3">
          Bimbingan Konseling Putra Anda
        </h1>
        {children}
      </body>
    </html>
  );
}
