import { create } from 'zustand';

interface Item {
  id: string;
  cafeName: string;
  address?: string;
}

interface Hashtag {
  hashtag: string[];
  setHashtag: (newHashtag: string[]) => void;
  searchHashtag: { items: Item[] }; // 구체적인 타입으로 변경
  setSearchHashtag: (newSearchHashtag: { items: Item[] }) => void; // 구체적인 타입으로 변경
  resetHashtag: () => void;
}

const useHashtagStore = create<Hashtag>()((set) => ({
  hashtag: [],
  setHashtag: (newHashtag) => set({ hashtag: newHashtag }),
  searchHashtag: { items: [] },
  setSearchHashtag: (newSearchHashtag) =>
    set(() => ({ searchHashtag: newSearchHashtag })),
  resetHashtag: () => set({ hashtag: [], searchHashtag: { items: [] } }), // searchHashtag도 초기화
}));
export default useHashtagStore;
