import React from "react";
import { Divider } from "@nextui-org/divider";
const Seperator = () => {
  return (
    <div className="mb-4 flex items-center py-6">
      <div className="mr-3 flex-grow border-t border-divider" />
      <span className="text-sm text-divider">OR</span>
      <div className="ml-3 flex-grow border-t border-divider" />
    </div>
  );
};

export default Seperator;
