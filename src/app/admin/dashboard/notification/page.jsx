// import React from "react";

// const page = () => {
//   return <button>click me</button>;
// };

// export default page;

"use client";
import React, { useState } from "react";
import CreateNotificationForm from "./CreateNotificationForm";

const Page = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      {showComponent && <CreateNotificationForm />}
      <button onClick={handleClick}>Add notification</button>
    </div>
  );
};

export default Page;
