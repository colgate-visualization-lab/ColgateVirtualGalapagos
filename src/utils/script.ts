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
              "Good to see you again. Welcome to Isabela, the largest island in the Galapagos. It's home to six volcanoes, extremely rare pink iguanas, and a fascinating scientific mystery.",
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
            speaker: "jade",
            speech:
              "I think the answer to our mystery might have to do with tectonic plates! There’s a subduction zone not so far away, you know.",
          },
          {
            speaker: "wade",
            speech:
              "That's a good point! I think that the ocean currents are involved. Maybe a few iguanas made their way over from San Cristobal.. Marine iguanas are really great swimmers!",
          },
          {
            speaker: "dan",
            speech: "They sure are. Well I think--",
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
            speaker: buddy.name,
            speech: `Nice to meet you! I'm Terry and this is my friend ${username}. We're scientists too!`,
          },
          {
            speaker: "jade",
            speech:
              "Good to meet you both! My name is Jade and these two are Dan and Wade",
          },
        ],
      };
    }
    default:
      return { lines: [] };
  }
}
