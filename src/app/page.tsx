import { Section } from "@/components/Section";
import { google } from 'googleapis'
import { getAllProblems } from "@/service/admin/read";
import { addPassage } from "@/service/admin/read";

export const revalidate = 60;

async function getData() {



	const data = getAllProblems('no')


	return data;
}




async function App() {

	const data = await getData()

	

	


	return (
		<Section dataa={data} title="yes"/>
	);
};

export default App