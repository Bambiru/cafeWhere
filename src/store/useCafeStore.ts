import { create } from 'zustand';

interface CafeDetails {
  id: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
  cafeName?: string;
  mainImage?: string;
  description?: string;
  address?: string;
  businessHours?: string;
  storePhoneNumber?: string;
  facilityInformation?: string;
  score?: number;
  category?: string[];
  reviewQuantity?: number | undefined;
  map?: string;
  hashtag?: string[];
  expand?: {
    hashtag: {
      id: string;
      icon: string;
      keyword: string;
    }[];
  };
}

interface Cafe {
  cafe: CafeDetails | null;
  setCafe: (newCafe: CafeDetails | null) => void;
}

const useCafeStore = create<Cafe>()((set) => ({
  cafe: null,
  setCafe: (newCafe) => set({ cafe: newCafe }),
}));
export default useCafeStore;
