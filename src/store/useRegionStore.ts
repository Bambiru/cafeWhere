import { create } from 'zustand';

interface Region {
  region: string;
  setRegion: (value: string) => void;
}

const useRegionStore = create<Region>()((set) => ({
  region: '종로구',
  setRegion: (newRegion) => set({ region: newRegion }),
}));
export default useRegionStore;
