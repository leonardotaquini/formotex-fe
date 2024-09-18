import { SnackbarProvider } from "notistack";
import "./App.css";
import { ThemeProvider } from "./components/shadcn/theme-provider";
import { AppRoutes } from "./routes/AppRoutes";


function App() {




  return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <div className="grid grid-rows-[auto_1fr] h-screen">
          <AppRoutes /> 
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  ) 
}

export default App;
