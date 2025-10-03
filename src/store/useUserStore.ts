/**
 * @author Fajar Postman
 */

import { create } from 'zustand';

interface UserState {
  currentUserId?: number;
  setUser: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUserId: undefined,
  setUser: (id) => set({ currentUserId: id }),
}));
