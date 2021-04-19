export const scenes = 
{
    aa: {
      q: "You are standing in a yard. You see a house.",
      a: {
         text: "Go to the house.",
         result: "ba"
      },
      b: {
        text: "Turn around.",
        result: "ca"
      } 
    },
      ba: {
      q: "You are at the front door of the house.",
      a: {
         text: "Knock on the door.",
         result: "da"
      },
      b: {
        text: "Look in the window.",
        result: "ea"
      } 
    },
      ca: {
      q: "You see a forest.",
      a: {
         text: "Go to the woods.",
         result: "aa"
      },
      b: {
        text: "Turn left.",
        result: "ga"
      },
      c: {
        text: "Turn right.",
        result: "fa"
      }
    },
      da: {
      q: "A troll answers the door.",
      a: {
         text: "Run away.",
         result: "ca"
      },
      b: {
        text: "Fight the troll.",
        result: "aa"
      } 
    },
      ea: {
      q: "You see a troll inside the house.",
      a: {
         text: "Knock on the door.",
         result: "da"
      },
      b: {
        text: "Run away.",
        result: "ca"
      } 
    },
     fa: {
      q: "You see a river.",
      a: {
         text: "Go to the river.",
         result: "ha"
      },
      b: {
        text: "Turn around.",
        result: "ga"
      } 
    }
  }