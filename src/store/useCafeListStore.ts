import { RecordModel } from 'pocketbase';
import { create } from 'zustand';

interface cafeList {
  cafeList: null | RecordModel[];
  setCafeList: (value: RecordModel[] | undefined) => void;
}

const useCafeListStore = create<cafeList>()((set) => ({
  cafeList: null,
  setCafeList: (newCafeList) => set({ cafeList: newCafeList }),
}));
export default useCafeListStore;
