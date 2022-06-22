import cog from "./cog.png";
import { Cog } from "./styled";

const LoadingScreen = () => (
  <>
    <h3>Ładowanie kursu walut</h3>
    <Cog src={cog} alt="Ładujemy..."></Cog>
  </>
);

export default LoadingScreen;
