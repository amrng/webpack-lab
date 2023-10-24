import { generateJoke } from "./generateJokes";
import "./style/main.scss";
import smile from "./assets/smiley.svg";

const image = document.getElementById("smiley");
image.src = smile;
generateJoke();

document.getElementById("btn").addEventListener("click", generateJoke);
