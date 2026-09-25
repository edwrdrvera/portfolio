export type BioSegment = string | { keyword: string; note?: string };

export const heroBio = {
  name: "edward",
  bio: [
    "is a ",
    { keyword: "software developer" },
    " from ",
    { keyword: "winnipeg", note: "manitoba, canada — cold winters, great summers" },
    " who cares a lot about making things that are ",
    { keyword: "easy to use" },
    " and ",
    { keyword: "look good" },
    ", and he puts the same care into writing ",
    { keyword: "clean code" },
    ". he's curious about how fast tech is moving, and right now he's learning ",
    {
      keyword: "agentic development",
      note: "building with ai agents that plan, use tools, and ship code alongside you",
    },
    ".",
  ] as BioSegment[],
  links: {
    linkedin: "https://www.linkedin.com/in/riveraea/",
    github: "https://github.com/edwrdrvera",
    email: "mailto:earivera.dev@outlook.com",
  },
};
