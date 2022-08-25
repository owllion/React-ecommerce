import cl from "src/constants/color/color";

export const barStyle = (progress: number) => ({
  rotation: 0.25,
  strokeLinecap: "round",
  textSize: "15px",
  pathTransitionDuration: 0.5,
  pathColor: `rgba(225, 225, 225, ${progress / 100})`,
  textColor: `${cl.white}`,
  trailColor: `${cl.white}`,
  backgroundColor: `${cl.white}`,
});
