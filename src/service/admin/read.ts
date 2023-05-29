import { firestore } from './firebase-admin'

export const getAllProblems = async (date:any) => {
  const data = await firestore.collection('Days').get()
  return data.docs.map(doc => doc.data());
}


export const addPassage = async (date:any, passage: any, questions: any) => {
	console.log('trying to add passage')
	const new_doc = firestore.collection('Days').doc(date)

	const data = {
        passage: passage,
		questions: questions
    };

    await new_doc.set(data)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}
