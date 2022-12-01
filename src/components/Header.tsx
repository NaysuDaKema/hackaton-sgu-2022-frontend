import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#054C16", // green sgu
      }}
    >
      <img
        src="https://www.sgu.ru/sites/all/themes/ssu_theme/logo.png"
        alt="logo"
        style={{ width: "6rem", height: "6rem", marginLeft: "0.75rem" }}
      />
      <Typography variant="h2" m={"0.25rem"} mt={"0.75rem"} color={"#FEFEFE"}>
        Экспорт расписания
      </Typography>
    </Box>
  );
}

export default Header;
