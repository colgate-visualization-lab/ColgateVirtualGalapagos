import { ScriptType } from "../atomic-design/templates/Conversation";
import { CharacterType } from "../contexts/GameContext";
import { ValidIslandNames } from "../types";

export function makeIntroScript(
  mysteryName: ValidIslandNames,
  buddy: CharacterType,
  username: string
): ScriptType {
  switch (mysteryName) {
    case "isabela": {
      return {
        lines: [
          {
            speaker: "sula",
            speech: "Hey there you two!",
          },
          {
            speaker: buddy.name,
            speech: "Hi Sula!",
          },
          {
            speaker: "sula",
            speech:
              "Good to see you again. Welcome to Isabela, the largest island in the Galápagos. It’s home to six volcanoes, extremely rare pink iguanas, and a fascinating scientific mystery. ",
          },
          {
            speaker: buddy.name,
            speech:
              "There's a MYSTERY on Isabela? What is it about? Why hasn't it been solved yet? Who is trying to solve it? When--",
          },
          {
            speaker: "sula",
            speech: `Whoa, Whoa, slow down there, ${
              buddy.displayName || buddy.name
            }! How about I introduce you to some of my scientist friends to tell you about it.`,
          },
          {
            speaker: buddy.name,
            speech: "That would be awesome! Thanks!",
          },
          {
            speaker: "olivia",
            speech:
              "I think the answer to our mystery might have to do with tectonic plates! There’s a subduction zone not so far away, you know. Or the Galápagos islands could’ve been formed similarly to another island chain like Hawaii.",
          },
          {
            speaker: "wade",
            speech:
              "Those are some good points! I think that the ocean currents are involved. Maybe a few iguanas made their way over from San Cristóbal… marine iguanas are really great swimmers!",
          },
          {
            speaker: "dan",
            speech:
              "But San Cristóbal is still too young to have been where the marine iguanas underwent their evolution. Also, while the marine iguanas are good swimmers, that doesn't explain the land iguanas. What if---",
          },
          {
            speaker: "dan",
            speech: "Oh, hi Sula! What are you doing here?",
          },
          {
            speaker: "sula",
            speech:
              "Hey there! I want all of you to meet some friends of mine.",
          },
          {
            id: "hide-dan-wade",
            speaker: buddy.name,
            speech: `Nice to meet you! I'm ${
              buddy.name
            }, and this is my friend${
              username ? " " + username : ""
            }. We're scientists too!`,
            isCheckpoint: true,
          },
          {
            id: "show-dan-wade",
            speaker: "olivia",
            speech:
              "Good to meet you both! My name is Olivia and these two are Dan and Wade",
            isCheckpoint: true,
          },
          {
            id: "hide-dan-wade",
            speaker: buddy.name,
            speech: "Hi Dan. Hi Wade!",
            isCheckpoint: true,
          },
        ],
      };
    }
    default:
      return { lines: [] };
  }
}
