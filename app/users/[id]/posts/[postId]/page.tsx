import React from "react";
interface Props {
  params: Promise<{
    id: string;
    postId: string;
  }>;
}

const UserPostIdPage = async ( {params} : Props) => {
  const id = (await params).id;
  const postId = (await params).postId;

  return (
    <div>
      <p>
        User: {id}, {postId}
      </p>
    </div>
  );
};

export default UserPostIdPage;
