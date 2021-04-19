export const scenes = 
{
  end: {
    q: "The End.",
    a: {
      text: "Go back to the beginning.",
      result: "aa"
    }
  },
  aa: {
    q: "You wake up. You are not in bed. You are in the woods.",
    a: {
      text: "Go back to sleep.",
      result: "ba"
    },
    b: {
      text: "Look around.",
      result: "ca"
    } 
  },
  ba: {
    q: "You shut your eyes. A bird calls your name.",
    a: {
      text: "Say hello to the bird.",
      result: "end"
    },
    b: {
      text: "Keep your eyes shut and do not talk.",
      result: "end"
    } 
  },
  ca: {
    q: "You find a small creek.",
    a: {
      text: "Try to jump across the creek.",
      result: "end"
    },
    b: {
      text: "Try to swim in the creek.",
      result: "end"
    } 
  }
}