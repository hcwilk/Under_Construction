import { Section } from "@/components/Section";
import { google } from 'googleapis'

export const revalidate = 60;

async function getData() {


	const creds = {
		"type": "service_account",
		"project_id": "actstuffyes",
		"private_key_id": process.env.PRIVATE_KEY_ID,
		"private_key": `-----BEGIN PRIVATE KEY-----\n${process.env.PRIVATE_KEY!.split("\\n").join("\n")}\n-----END PRIVATE KEY-----\n`,
		"client_email": `${process.env.CLIENT_EMAIL}`,
		"client_id": `${process.env.CLIENT_ID}`,
		"auth_uri": "https://accounts.google.com/o/oauth2/auth",
		"token_uri": "https://oauth2.googleapis.com/token",
		"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
		"client_x509_cert_url": `${process.env.CLIENT_CERT}`,
		"universe_domain": "googleapis.com"
	}

	const client = new google.auth.JWT({
		email: creds.client_email,
		key: creds.private_key,
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],  // or you can just use ['https://www.googleapis.com/auth/spreadsheets'] if you want both read and write access
	});


	// ALSO MAKE SURE THAT THE SHEET GIVES EDIT ACCESS TO THAT SERVICE ACCOUNT
	const sheets = google.sheets({ version: 'v4', auth: client });

	// Replace 'SpreadsheetId' and 'SheetName' with your actual spreadsheet ID and sheet name
	const { data } = await sheets.spreadsheets.values.get({
		spreadsheetId: '1vf0raJjIiIWozbtkfG_a6dJOERHzXriRKXZgS1ScfHk',
		range: 'Sheet1',
	});



	return data;
}




async function App() {

	const data = await getData()
	


	return (
		<Section dataa={data} title="yes"/>
	);
};

export default App