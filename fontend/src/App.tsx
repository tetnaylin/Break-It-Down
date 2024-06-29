import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeroText } from "./HeroText/HeroText";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Stats } from "./Dailies/Dailies";
import { StatsRing } from "./StatsRing/StatsRing";

export default function App() {
  return (
      <MantineProvider theme={theme}>
        <Router>
          <Routes> 
          <Route path="/" element={<HomePage/>} />
           <Route path="/selection" element={<SecondPage />} />
          </Routes>
        </Router>
          
        
      </MantineProvider>
  );
}

export function HomePage() {
  return (
    <MantineProvider theme={theme}>
      <HeroText/>
    </MantineProvider>
  )
}

export function SecondPage() {
  return (
    <div>
      <Stats></Stats>
    </div>

  )
}

export function GameOverPage() {
  return (
    <MantineProvider theme={theme}>
      <StatsRing/>
    </MantineProvider>
  )
}