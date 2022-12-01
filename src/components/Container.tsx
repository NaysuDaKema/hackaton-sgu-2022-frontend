import { Box } from "@mui/material";
import { useState } from "react";
import Customization from "./Customization";
import ExportButtons from "./ExportButtons";
import Url from "./Url";

function Container() {
  const [url, setUrl] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "1.25rem",
        marginTop: "1.25rem",
      }}
    >
      <Url setUrl={setUrl} />
      {/* <Customization /> */}
      <ExportButtons url={url} />
    </Box>
  );
}

export default Container;
