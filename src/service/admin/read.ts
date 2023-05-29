import { firestore } from './firebase-admin'

export const getAllProblems = async () => {
  const data = await firestore.collection('Days').get()
  return data.docs.map(doc => doc.data());
}


