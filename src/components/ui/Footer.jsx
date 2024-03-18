import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      align="center"
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: "14px",
        borderTop: "0.5px solid rgba(128, 128, 128, 0.5)",
        fontSize: "12px",
      }}
      {...props}
    >
      {"© copyright 2024 - All Right Reserved by W3"}
    </Typography>
  );
}

export default function SignUp() {
  return <Copyright />;
}
