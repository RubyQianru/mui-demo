// yarn add @material-ui/core
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          height: 50,
          width: "100%",
          margin: 0,
          backgroundColor: "rgba(118, 185, 0, 0.55)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
        }}
      >
        <h2>MUI demo</h2>
        <Button variant="outlined">Play Pokemon</Button>
      </nav>
    </>
  );
}
