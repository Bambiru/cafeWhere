import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);
pb.autoCancellation(false);
export const pbImg = (
  collectionId: string,
  recordId: string,
  mainImage: string
) => {
  return `${import.meta.env.VITE_PB_URL}/api/files/${collectionId}/${recordId}/${mainImage}`;
};

export default pb;
