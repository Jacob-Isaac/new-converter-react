import cog from "./cog.png";
import {Img} from "./styled";

const LoadingScreen = () => (
 <>
    <h3>Ładowanie kursu walut</h3>
    <Img src={cog} alt= "Ładujemy..."></Img>
</>
);

export default LoadingScreen ;