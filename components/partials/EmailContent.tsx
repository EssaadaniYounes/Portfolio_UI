import React from "react";

function EmailContent({
  name,
  from,
  message,
}: {
  name: string;
  from: string;
  message: string;
}) {
  return (
    <div className="text-center max-w-sm bg-blue-400 p-8 rounded-lg">
      <h2 className="text-xl text-gray-800 font-bold tracking-tighter ">
        Hello Younes from {name}!
      </h2>
      <p className="mt-3 text-white max-w-md mx-auto">{message}</p>
      <p className="mt-3 text-gray-100 max-w-md mx-auto font-medium">
        Email: {from}
      </p>
    </div>
  );
}

export default EmailContent;
