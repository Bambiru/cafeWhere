import { create } from 'zustand';

interface Word {
  words: string[];
  setWords: (value: string[]) => void;
}

const useWordStore = create<Word>()((set) => ({
  words: [],

  setWords: (newWords) => set({ words: newWords }),
}));

export default useWordStore;
