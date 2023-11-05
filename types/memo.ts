import { type Timestamp } from 'firebase/firestore'

interface MemoType {
  id: string
  bodyText: string
  updatedAt: Timestamp
}

export type { MemoType }
