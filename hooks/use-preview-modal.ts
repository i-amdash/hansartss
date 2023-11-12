import { create } from 'zustand';
import { Painting } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: Painting;
  onOpen: (data: Painting) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Painting) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
