import React from "react";
import { ScriptType } from "../../../atomic-design/templates/Conversation";
import { useGameContext } from "../../../contexts/GameContext";

export default function LaboratoryStart() {
  const { buddy } = useGameContext();

  const script: ScriptType = {
    lines: [
      {
        speaker: "sula",
        speech:
          "Hey Olivia! Gneiss equipment over there! Are you ready to rock and roll?",
        directedTo: "olivia",
      },
      {
        speaker: "olivia",
        speech:
          "Wow. How many years have we known each other and you still crack rock puns when you see me. I guess I shouldn’t take them for granite.",
        vocab: ["granite"],
      },
      {
        speaker: "sula",
        speech: "AHHH!! It’s good to see you my friend!",
      },
      {
        speaker: "olivia",
        speech: "It's good to see you too!! Hey! I know you two!!",
      },
      {
        speaker: "sula",
        speech:
          "Yes! I brought them here thinking they could help with your research. I remember you telling me about an idea you had...",
      },
      {
        speaker: "olivia",
        directedTo: buddy.name,
        speech:
          "Yes! As I mentioned before, I’m Olivia and I am a Geologist, which means that I study processes that occur on our home planet, Earth! For a few years, I’ve been studying volcanoes here in the Galapagos, and I think that there might be a connection between volcanic activity and island formation.",
      },
      {
        speaker: buddy.name,
        speech:
          "Oh wow, that’s exciting!! I wanna help! How do you even start to figure something like that out?",
      },
      {
        speaker: "olivia",
        speech:
          "Great question! To figure out if my idea, or hypothesis, is right, I will need to follow a system that scientists use called the Scientific Method.",
        vocab: ["hypothesis", "Scientific method"],
      },
      {
        speaker: buddy.name,
        speech: "Oooo, sounds fancy! How does it work?",
      },
      {
        speaker: "olivia",
        speech:
          "The first step of the scientific method involves finding a problem. For us, the problem we are trying to figure out is how the islands are formed.",
      },
      {
        speaker: buddy.name,
        speech: "That sounds like a pretty complex problem!",
      },
      {
        speaker: "olivia",
        speech:
          " It is, which is why after doing some research on the volcanoes here in the Galapagos, I realized that there might be a connection between volcanic activity and island formation, which was the idea behind my hypothesis.",
        vocab: ["volcanoes", "hypothesis"],
      },
      {
        speaker: buddy.name,
        speech: "What's a high-poh-thes-sis?",
      },
      {
        speaker: "olivia",
        speech:
          "Great question. A hypothesis [hypothesis highlights- user can click on it and find the definition in the log book under glossary] is an idea that someone has to explain something, but in science we like to make sure that we’re right by checking our idea with tests and finding evidence that supports it.",
      },
      {
        speaker: buddy.name,
        speech:
          "Okay, that makes sense. Thanks Olivia! So what exactly is your hypothesis?",
      },
      {
        speaker: "olivia",
        speech:
          "I’m glad you asked! My hypothesis is that the Galapagos islands were formed by volcanic activity and that the islands get older as you move east along the island chain.",
      },
      {
        speaker: buddy.name,
        speech:
          "Wow! That sounds awesome! If you don’t mind me asking- how do you plan to test your idea?",
      },
      {
        speaker: "olivia",
        speech:
          "I need to visit many of the Galapagos islands to collect some information, which I was actually just on my way to do! Would you two like to come along? I could always use an extra hand, plus you might notice something I wouldn’t!",
      },
      {
        speaker: buddy.name,
        speech:
          "REALLY!? That would be fantastic, thank you so much!! We’re excited to help you as much as we can! ",
      },
      {
        speaker: "olivia",
        speech:
          "Amazing!! It's nice to be research partners with someone just as excited as I am !!",
      },
      {
        speaker: "sula",
        speech:
          "Well it seems like there’s an awesome adventure ahead of you three, I’ll leave you be! I have another tour group I have to tend to, but I’ll catch you later!",
      },
      {
        speaker: buddy.name,
        speech: "Bye Sula!!",
      },
      {
        id: "map-animations",
        speaker: "olivia",
        speech:
          "Okay friends, let me show you where I am planning to take observations...",
        isCheckpoint: true,
      },
    ],
  };

  return <div></div>;
}
