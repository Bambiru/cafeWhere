import { create } from 'zustand';

const useHashtagStore = create((set) => ({
  hashtag: [],
  setHashtag: (newHashtag: string) => set({ hashtag: newHashtag }),
  searchHashtag: { item: [] },
  setSearchHashtag: (newSearchHashtag: string) =>
    set(() => ({ searchHashtag: newSearchHashtag })),
  resetHashtag: () => set({ hashtag: [] }),
}));
export default useHashtagStore;
