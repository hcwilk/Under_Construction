import { Section } from "@/components/Section";
import { google } from 'googleapis'
import { getAllProblems } from "@/service/admin/read";

export const revalidate = 60;

function getIndexofDayinYear(date: Date){

}

async function getData() {
	let allData = await getAllProblems()
	let date = new Date();
	let year = date.getFullYear().toString().substr(-2); // get last two digits of year
	let month = date.getMonth() + 1; // getMonth() starts from 0
	let day = date.getDate();
	let formattedDate = `${month}-${day}-${year}`;


	const index = allData.map(e => e.date).indexOf(formattedDate);

	const data = allData.slice(0,index+1);


	return {data, index};
}

async function App() {
	const data = await getData()
	return (
		<Section problems={data}/>
	);
};

export default App