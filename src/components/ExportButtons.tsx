import { Box, Button } from "@mui/material";

type Props = {
  url: string;
};

function ExportButtons({ url: scheduleUrl }: Props) {
  return (
    <Box>
      <a
        download
        href={`http://localhost:3001/calendar?url=${scheduleUrl}`}
        style={{ textDecoration: "none" }}
      >
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="success"
          sx={{ marginLeft: "0.5rem", height: "3.5rem" }}
        >
          Экспорт в .ics
        </Button>
      </a>
    </Box>
  );
}

export default ExportButtons;
