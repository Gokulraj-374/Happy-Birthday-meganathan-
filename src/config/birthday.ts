export interface IntroSection {
  type: "intro";
  title: string;
  message: string;
}

export interface MemorySection {
  type: "memories";
  title: string;
  items: Array<{ image: string; caption: string }>;
}

export interface MessageSection {
  type: "message";
  title: string;
  content: string;
}

export interface BirthdayConfig {
  name: string;
  birthDate: string;
  landingMessage: string;
  sections: [IntroSection, MemorySection, MessageSection];
  music: {
    url: string;
    title: string;
  };
  finale: {
    title: string;
    message: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  name: "Meghanathan A",
  birthDate: "2026-03-24",
  landingMessage: "A Journey of Memories and Love...",
  sections: [
    {
      type: "intro",
      title: "Happy Birthday Meghanathan ❤️",
      message: `You are one of the best things that ever happened to me.
Life feels more beautiful, meaningful, and peaceful because you are in it.
Thank you for being there for me in ways no one else ever could.

Meghanathan, you are not just my friend… you are my strength and my comfort.
In my hardest times, you stood by me without leaving — and I will never forget that.
Some people are special, but you are truly rare.

I don’t say it often, but you mean so much to me… more than words can ever express.

May your life be filled with happiness, love, and endless smiles.
Your presence makes everything better — just by being you.
You truly deserve all the good things this world has to offer.

You are one of the most important people in my life......
Thank you for being there in every situation, for understanding me without words, and for bringing so much happiness into my life.....

I truly feel lucky to have you.
No matter what happens, you will always have a special place in my heart ❤️.... 

Once again happy birthday da thayoli.....`,
    },
    {
      type: "memories",
      title: "Our Beautiful Memories",
      items: [
        {
          image: "/images/memory1.jpg",
          caption: "A bond that's stronger than ever.",
        },
        {
          image: "/images/memory2.jpg",
          caption: "Every moment together is a treasure.",
        },
        {
          image: "/images/memory3.jpg",
          caption: "To many more study sessions and laughs!",
        },
      ],
    },
    {
      type: "message",
      title: "A Special Note",
      content: "Thank you for being there always. Your smile lights up the room, and your heart is even more beautiful than your words. May this year bring you all the happiness and success you deserve.",
    },
  ],
  music: {
    url: "/audio.mp3",
    title: "Your Favorite Song",
  },
  finale: {
    title: "Happy Birthday, Meghanathan!",
    message: "May your day be filled with joy, laughter, and endless surprises!",
  },
};
