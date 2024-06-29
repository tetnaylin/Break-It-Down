import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeroText } from "./HeroText/HeroText";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Stats } from "./Dailies/Dailies";
import { StatsRing } from "./StatsRing/StatsRing";
import { Button } from "./Music/Music";
import PoseComponent from "./PoseComponents/PoseComponent";


export default function App() {
  return (
      <MantineProvider theme={theme}>
        <Router>
          <Routes> 
          <Route path="/" element={<HomePage/>} />
           <Route path="/selection" element={<SecondPage />} />
           <Route path="/game" element={<ThirdPage />} />
           <Route path="/selection/play" element={<GamePage/>}/>
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

// BACKEND Computer Vision Functions
export function GamePage() {
  // Example videoPath
  const videoPath = "../public/assets/IMG_2016.mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
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