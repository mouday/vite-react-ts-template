import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function User() {
  const { username } = useSelector((state: any) => {
    return {
      username: state.username,
    };
  });
  return (
    <div>
      User
      {username}
    </div>
  );
}
