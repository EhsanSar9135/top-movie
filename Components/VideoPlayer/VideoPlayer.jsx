import { Divider, Dropdown, Menu, Slider } from "antd";
import { useRef, useState } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";
import classnames from "classnames";
import screenfull from "screenfull";
import Image from "next/image";

const VideoPlayer = () => {
   const [playing, setPlaying] = useState(false);
   const [show, setShow] = useState(false);
   const [progress, setProgress] = useState(0);
   const [playbackRate, setPlaybackRate] = useState(1);
   const [activeMenuItem, setActiveMenuItem] = useState(1);
   const [volume, setVolume] = useState(50);

   const ref = useRef();
   const fullscreenRef = useRef();

   const handlePlaying = (status) => {
      setPlaying(status);
   };
   const SpeedList = [
      { key: 2 },
      { key: 1.5 },
      { key: 1.25 },
      { key: 1 },
      { key: 0.75 },
      { key: 0.5 },
   ];

   const menu = (
      <Menu>
         {SpeedList.map((speed) => {
            return (
               <Menu.Item
                  className={
                     activeMenuItem === speed.key ? styles.active_menu : ""
                  }
                  onClick={() => {
                     setActiveMenuItem(speed.key);
                     setPlaybackRate(speed.key);
                     setShow(false);
                  }}
                  key={speed.key}
               >
                  {speed.key}×
               </Menu.Item>
            );
         })}
      </Menu>
   );
   const volumeSlider = (
      <Menu>
         <Menu.Item>
            <Slider
               vertical
               value={volume}
               className={styles.volume_slider}
               onChange={(volume) => {
                  setVolume(volume);
               }}
            />
         </Menu.Item>
      </Menu>
   );

   return (
      <div ref={fullscreenRef}>
         <ReactPlayer
            ref={ref}
            className={styles.player}
            url="/Assets/Videos/trailer.mp4"
            width="100%"
            height="100vh"
            playing={playing}
            onProgress={({ played, playedSeconds, loaded, loadedSeconds }) => {
               console.log(played);
               setProgress(played * 100);
            }}
            playbackRate={playbackRate}
            volume={volume / 100}
         />
         <Card className={classnames(styles.controller, show && styles.show)}>
            <div className={classnames(styles.main_control, "ml-2")}>
               {!playing ? (
                  <Image
                     onClick={() => handlePlaying(true)}
                     className={styles.play}
                     width={32}
                     height={32}
                     src={"/Assets/play.svg"}
                     alt="play"
                  />
               ) : (
                  <Image
                     onClick={() => handlePlaying(false)}
                     className={styles.play}
                     width={32}
                     height={32}
                     src={"/Assets/pause.svg"}
                     alt="pause"
                  />
               )}
               <Slider
                  onChange={(value) => {
                     setProgress(value);
                     ref.current.seekTo(value / 100);
                  }}
                  value={progress}
                  className={styles.slider}
                  tooltipVisible={false}
               />

               <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  onClick={() => setShow(true)}
               >
                  <Image
                     className="ml-3"
                     width={32}
                     height={32}
                     src={"/Assets/speedrating.svg"}
                     alt="speedrating"
                  />
               </Dropdown>
               <Dropdown
                  overlay={volumeSlider}
                  trigger={["click"]}
                  onClick={() => setShow(true)}
               >
                  <Image
                     className="ml-3"
                     width={32}
                     height={32}
                     src={
                        volume !== 0 ? "/Assets/volume.svg" : "/Assets/mute.svg"
                     }
                     alt="volume"
                  />
               </Dropdown>
               <Image
                  src={"/Assets/fullscreen.svg"}
                  width={32}
                  height={32}
                  className="ml-3"
                  onClick={() => {
                     screenfull.toggle(fullscreenRef.current);
                  }}
                  alt="fullscreen"
               />
            </div>
         </Card>
      </div>
   );
};

export default VideoPlayer;
