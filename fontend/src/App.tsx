import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeroText } from "./HeroText/HeroText";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Stats } from "./Dailies/Dailies";


export default function App() {
  return (
      <MantineProvider theme={theme}>
        <Router>
          <Routes> 
          <Route path="/" element={<HomePage/>} />
           <Route path="/selection" element={<SecondPage />} />
           <Route path="/game" element={<ThirdPage />} />
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
      <Stats />
      <br></br>
      <h1> <center> Select Songs </center> </h1>
      <br>
      </br>
      <br>
      </br>
      <Button />
    </div>
  )
}

export function ThirdPage() {
  return (
    <MantineProvider theme={theme}></MantineProvider>
  )
}

export function GameOverPage() {
  return (
    <MantineProvider theme={theme}>
      <StatsRing/>
    </MantineProvider>
  )
}