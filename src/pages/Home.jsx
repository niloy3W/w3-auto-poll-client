import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useState } from "react";
import SelectParent from "../components/ui/SelectParent";
import { useAssignParentMutation } from "../redux/features/assign-parent/assign-parentApi";

const defaultTheme = createTheme();

export default function Home() {
  const [parentId, setParentId] = useState("");
  const [uploadParentData] = useAssignParentMutation();
  const { user: currentUser } = useSelector(selectCurrentUser);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Saving relation");

    const formData = {
      userId: currentUser.id,
      parentId: parentId,
    };

    try {
      const res = await uploadParentData(formData).unwrap();

      toast.success(res?.message, {
        id: toastId,
      });
    } catch (error) {
      toast.error(error?.data?.errorMessage, { id: toastId });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "white",
          borderRadius: "0.6rem",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Typography component="h1" variant="h5">
            Chose Parent
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <SelectParent setParentId={setParentId} />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#9B1FE9" }}
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
