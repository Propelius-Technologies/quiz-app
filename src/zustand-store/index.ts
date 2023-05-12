import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import createCandidateSlice, { CandidateSlice } from './candidate'

export type StoreType = CandidateSlice

const useStore = create<StoreType>()(
    devtools((...args) => ({
        ...createCandidateSlice(...args)
    }))
)

export default useStore