import "@mantine/core/styles.css";
import { MantineProvider, Overlay, AspectRatio  } from "@mantine/core";
import { theme } from "./theme";
import { HeroText } from "./HeroText/HeroText";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Stats } from "./Dailies/Dailies";
import { StatsRing, StatsRingProps } from "./StatsRing/StatsRing";
import { Button } from "./Music/Music";
import PoseComponent from "./PoseComponents/PoseComponent";
import { GameOver } from "./GameOverAdaptation/GameOver"
export default function App() {
  return (
      <MantineProvider theme={theme}>
        <Router>
          <Routes> 
          <Route path="/" element={<HomePage/>} />
           <Route path="/selection" element={<SecondPage />} />
           <Route path="/selection/play" element={<GamePage/>}/>
           {/* <Route path="/game_over" element={<GameOverPage/>}/> */}
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
  const videoPath = "/assets/IMG_2016.mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}

export function GameOverPage({ deviation }: StatsRingProps) {
  return (
    <MantineProvider theme={theme}>
      <GameOver/>
      <StatsRing deviation={deviation}/>
    </MantineProvider>
  )
}