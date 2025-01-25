import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="size-full flex flex-col justify-center items-center">
      <h1 className="text-[50px] text-center">Error 404: Page Not Found</h1>
      <Link to="/" className="text-[20px] text-center underline">
        Back to home page
      </Link>
    </div>
  );
}

export default ErrorPage;
