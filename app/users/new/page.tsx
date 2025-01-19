'use client';

import { useRouter } from "next/navigation";
import React from "react";

const newPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

  return (
    <div>
      <h1 className="text-3xl">New User</h1>
      <button onClick={() => router.back()} className="btn btn-primary">Submit</button>
    </div>
  );
};

export default newPage;
