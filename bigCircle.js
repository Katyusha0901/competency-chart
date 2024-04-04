import { allSkills } from "./data.js";
import { allNames } from "./data.js";

export function bigCirle() {
  allSkills().forEach((element, index, array) => {
    let skillBlock = document.createElement("div");
    skillBlock.className = "big-circle__skill-block";
    skillBlock.id = `big-circle__skill-block-${index}`;
    skillBlock.style.transform = `rotate(${(360 / array.length) * index}deg)`;

    let skill = document.createElement("div");
    skill.className = "big-circle__skill";
    skill.id = `big-circle__skill-${index}`;

    let skillText = document.createElement("div");
    skillText.className = "big-circle__skill-text";
    skillText.innerHTML = `${array[index]}`;
    skillText.style.transform = `rotate(-${(360 / array.length) * index}deg)`;

    document.getElementById("big-circle").append(skillBlock);
    document.getElementById(`big-circle__skill-block-${index}`).append(skill);
    document.getElementById(`big-circle__skill-${index}`).append(skillText);
  });
}
bigCirle();
