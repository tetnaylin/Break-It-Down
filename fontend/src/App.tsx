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
           <Route path="/selection/play/nasty" element={<GamePage2/>}/>
           <Route path="/selection/play.renegade" element={<GamePage7/>}/>
           <Route path="/selection/play/arigato" element={<GamePage5/>}/>
           <Route path="/selection/play/chika" element={<GamePage3/>}/>
           <Route path="/selection/play/daboy" element={<GamePage4/>}/>
           <Route path="/selection/play.foreigner" element={<GamePage6/>}/>
           
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
  const videoPath = "/assets/haidilao.mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}
export function GamePage2() {
  // Example videoPath
  const videoPath = "/assets/freaky.mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}
export function GamePage3() {
  // Example videoPath
  const videoPath = "/assets/Chikatto Chika Chikattsu _ Kaguya-sama_ Love is War (360p).mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}
export function GamePage4() {
  // Example videoPath
  const videoPath = "/assets/Daboy ori (360p) (1).mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}
export function GamePage5() {
  // Example videoPath
  const videoPath = "/assets/haidilao.mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}
export function GamePage6() {
  // Example videoPath
  const videoPath = "/assets/Foreigner #sydney #townhall #sydney #sydneytrains #nsw #visitnsw (360p).mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}
export function GamePage7() {
  // Example videoPath
  const videoPath = "/assets/Learn How to do the renegade with Charlie damelio! (240p).mp4";
  //Pose Component takes in video files from public/assets
  return (
    <div>
      <PoseComponent videoPath={videoPath}></PoseComponent>
    </div>  )
}

export function GameOverPage({ deviation, secondsElapsed }: StatsRingProps) {
  return (
    <MantineProvider theme={theme}>
      <GameOver/>
      <StatsRing deviation={deviation} secondsElapsed={secondsElapsed} />
    </MantineProvider>
  )
}