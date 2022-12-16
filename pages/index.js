import React, { useEffect } from "react";
const index = () => {
  const Fun = async () => {
    const res = await fetch("/api/success");
    const data = await res.json();
    console.log("This is response from backend ", data);
  };
  useEffect(() => {
    Fun();
  }, []);
  return <div>This is frontend and backend</div>;
};
export default index;
