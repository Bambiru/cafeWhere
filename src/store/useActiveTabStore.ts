import { create } from 'zustand';

interface ActiveTabState {
  activeTab: string;
  setActiveTab: (newActiveTab: string) => void;
}

const useActiveTabStore = create<ActiveTabState>()((set) => ({
  activeTab: 'info',
  setActiveTab: (newActiveTab) => set({ activeTab: newActiveTab }),
}));
export default useActiveTabStore;
