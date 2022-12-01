import { Box, TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  setUrl: (url: string) => void;
};

function Url({ setUrl }: Props) {
  const [typedUrl, setTypedUrl] = useState("");

  const onChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setTypedUrl(value.currentTarget.value);
    setUrl(value.currentTarget.value);
  };

  return (
    <Box
      sx={{
        marginLeft: "2rem",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Ссылка на расписание"
        variant="outlined"
        onChange={onChange}
        value={typedUrl}
        sx={{
          width: "45rem",
          height: "3.5rem",
        }}
      />
    </Box>
  );
}

export default Url;
