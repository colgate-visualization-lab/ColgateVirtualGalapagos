import { ScriptType } from "../atomic-design/templates/Conversation";
import { CharacterType } from "../contexts/GameContext";
import { ValidIslandNames } from "../types";

function makeFullAudioPath(path: string) {
  return "/audio/scripts" + path;
}

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
            sceneInfo:
              "You've reached the island of Isabela and Sula, the booby diety, seems excited to see you both!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0001Booby.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech: "Hi Sula!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0002Buddy.m4a"
            ),
          },
          {
            speaker: "sula",
            speech:
              "Good to see you again. Welcome to Isabela, the largest island in the Galápagos. It’s home to six volcanoes, extremely rare pink iguanas, and a fascinating scientific mystery. ",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0003Booby.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "There's a MYSTERY on Isabela? What is it about? Why hasn't it been solved yet? Who is trying to solve it? When--",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0004Buddy.m4a"
            ),
          },
          {
            speaker: "sula",
            speech: `Whoa, Whoa, slow down there, ${
              buddy.displayName || buddy.name
            }! How about I introduce you to some of my scientist friends to tell you about it.`,
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0005Booby.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech: "That would be awesome! Thanks!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0006Buddy.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "I think the answer to our mystery might have to do with tectonic plates! There’s a subduction zone not so far away, you know. Or the Galápagos islands could’ve been formed similarly to another island chain like Hawaii.",
            sceneInfo: "Olivia, Dan, and Wade are mid-debate...",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0007Olivia.mp3"
            ),
          },
          {
            speaker: "wade",
            speech:
              "Those are some good points! I think that the ocean currents are involved. Maybe a few iguanas made their way over from San Cristóbal… marine iguanas are really great swimmers!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0008Wade.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "But San Cristóbal is still too young to have been where the marine iguanas underwent their evolution.",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0009Olivia.mp3"
            ),
          },
          {
            speaker: "dan",
            sceneInfo: "Dan realizes that they have company",
            speech:
              "Also, while the marine iguanas are good swimmers, that doesn't explain the land iguanas. What if-- Oh, hi Sula! What are you doing here?",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0010Dan.m4a"
            ),
          },
          {
            speaker: "sula",
            speech:
              "Hey there! I want all of you to meet some friends of mine.",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0011Booby.mp3"
            ),
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
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0012Buddy.m4a"
            ),
          },
          {
            id: "show-dan-wade",
            speaker: "olivia",
            speech:
              "Good to meet you both! My name is Olivia and these two are Dan and Wade",
            isCheckpoint: true,
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0013Olivia.mp3"
            ),
          },
          {
            id: "hide-dan-wade",
            speaker: buddy.name,
            speech:
              "What were you all just talking about? It sounded really interesting!",
            isCheckpoint: true,
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0014Buddy.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "Well, the three of us have been working together to answer a scientific question here in the Galápagos. We were just discussing it! I’m a geologist, Dan is a biologist, and Wade is an oceanographer-- we all study different sciences, so sharing what we know seems like the best way to find the answers to our question. ",

            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0015Olivia.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "Let me see if I have this right: a few scientists are working together and combining what they know to try and find the answer to an exciting scientific question… It's that mystery you were talking about earlier, Sula!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0016Buddy.m4a"
            ),
          },
          {
            speaker: "sula",
            speech: `Great investigating ${buddy.name}, that’s exactly right. I was hoping that you and ${username} could help Olivia, Dan, and Wade solve the mystery. What do you two say? Think you’re up for the challenge?`,
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0017Booby.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "That sounds amazing! We’d love to join. But could we hear a little bit about this scientific mystery?",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0018Buddy.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "Of course! Our mystery has to do with the age of the islands.",

            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0019Olivia.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech: "Wait, islands have ages? How does that work?",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0020Buddy.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "Good question! Well, it’s important to know that the Galápagos islands haven’t always been here. The volcanoes that make up these islands had to be created some time, which is like their birthday-- so they have ages, just like we all do.",

            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0021Olivia.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "Oh okay, so it’s really the volcanoes that have ages, not the islands. Got it.",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0022Buddy.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "Exactly. For the island of Isabela, the six volcanoes that have merged together were all formed about 700,000 years ago. ",

            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0023Olivia.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech: "Wow, that is SO old! Oh- sorry, was that rude of me?",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0024Buddy.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "No worries, 700,000 years might sound like a long time, but when you’re talking about time in geology, that’s actually very short. The volcanoes that make up Isabela Island are really young compared to the age of the Earth, which is over 4 and a half billion years! ",

            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0025Olivia.mp3"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "Wait- the Earth is 4 and a half BILLION years old? That number really does make the volcanoes on Isabela seem young. Wow!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0026Buddy.m4a"
            ),
          },
          {
            speaker: "olivia",
            speech:
              "You can see how young the volcanoes on Isabela are when you compare them to the volcanoes on other islands. For example, San Cristóbal has some of the oldest volcanoes in the Galápagos which were formed more than 2 million years ago. The oldest volcano in the Galápagos today is Española Island, which is about 3 million years old!",

            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0027Olivia.mp3"
            ),
          },
          {
            speaker: "dan",
            speech: `Here’s where it gets even more interesting, though. ${buddy.name}, do you remember those marine iguanas from earlier?`,
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0028Dan.m4a"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "Yeah! Wade was talking about how good they are at swimming, right?",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0029Buddy.m4a"
            ),
          },
          {
            speaker: "dan",
            speech:
              "Exactly. Well, there are actually two kinds of iguanas in the Galápagos. The marine iguanas are the only ocean-going reptiles in the world and are only found here in the islands; we use the word endemic when an animal or plant is found only in one place in the world. ",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0030Dan.m4a"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "So we call an animal or plant endemic when it’s unique to one place. Okay, got it!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0031Buddy.m4a"
            ),
          },
          {
            speaker: "dan",
            speech:
              "But the Galápagos land iguanas, who don’t live in the ocean but make their home on the islands, are ALSO endemic to the Galápagos. Biologists like me have determined that both of the endemic iguanas of the Galápagos are very closely related to each other, sort of like a really distant cousin. They are both descended from the same ancestor, a green iguana species from South America! But that ancestor that they share existed about 5 to 6 million years ago.",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0032Dan.m4a"
            ),
          },
          {
            speaker: buddy.name,
            speech:
              "Okay, so the Galápagos marine iguana and the Galápagos land iguana are closely related and can both be traced back to the South American green iguana. Awesome!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0033Buddy.m4a"
            ),
          },
          {
            speaker: "wade",
            speech:
              "And that brings us to our scientific mystery: Because the marine and land iguanas of the Galápagos only exist in these islands, they must have evolved HERE, in the islands. But how did the iguanas manage to evolve from their South American ancestor 5 to 6 million years ago, if all of the islands in the Galápagos are younger than 3 million years old? In other words, the islands where the evolution had to have taken place weren’t even HERE when the iguanas were evolving! It seems impossible, but we know it happened.",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0034Wade.m4a"
            ),
          },
          {
            speaker: buddy.name,
            speech: `I get it now, that’s a fascinating question. You three are wondering how the iguanas could have evolved in the Galápagos if the islands themselves weren’t around when that evolutionary process started. Oh man, I can’t wait for ${username} and me to join you three exploring!`,
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0035Buddy.m4a"
            ),
          },
          {
            speaker: "wade",
            speech:
              "That’s great to hear, we could definitely use your help! We were actually about to head over to our field lab, how about we all go and get started?",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0036Wade.m4a"
            ),
          },
          {
            speaker: buddy.name,
            speech: "Let's do it!",
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0037Buddy.m4a"
            ),
          },
          {
            speaker: "sula",
            speech: `Hey, ${username}, try selecting one of those icons on Isabela so that you can start exploring!`,
            audio: makeFullAudioPath(
              "/isabela_intro/IntroMysteryOne0038Booby.mp3"
            ),
          },
        ],
      };
    }
    default:
      return { lines: [] };
  }
}
