import { useState } from "react";
import Customization from "./Customization";
import ExportButtons from "./ExportButtons";
import Url from "./Url";

function Container() {
  const [url, setUrl] = useState("");

  return (
    <div className="flex ml-5 mt-5">
      <Url setUrl={setUrl} />
      {/* <Customization /> */}
      <ExportButtons url={url} />
    </div>
  );
}

export default Container;
