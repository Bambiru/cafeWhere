import { create } from 'zustand';

interface cafe {
  cafe: { id: string } | null;
  setCafe: (value: { id: string }) => void;
}

const useCafeStore = create<cafe>()((set) => ({
  cafe: null,
  setCafe: (newCafe: { id: string }) => set({ cafe: newCafe }),
}));
export default useCafeStore;
