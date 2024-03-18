import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import SecureRoute from "./routes/secureRoute";

function App() {
  return (
    <SecureRoute>
      <MainLayout />
    </SecureRoute>
  );
}

export default App;
