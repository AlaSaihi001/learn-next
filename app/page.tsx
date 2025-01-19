"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Welecome to PinguCoder</h1>
      <Link href="/users" className="btn btn-primary">Users</Link>
      <Link href="/admin" className="btn btn-primary">Admin</Link>
      <Link href="/home" className="btn btn-primary">Home</Link>

    </>
  );
}
