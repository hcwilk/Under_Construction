import React from "react";

interface PassageProps {
	selectedItem: number
}

import { google } from "googleapis";


export async function getData() {

	console.log('hitting')

	const creds = {
		"type": "service_account",
		"project_id": "actstuffyes",
		"private_key_id": process.env.PRIVATE_KEY_ID,
		"private_key": `-----BEGIN PRIVATE KEY-----\n${process.env.PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`,
		"client_email": process.env.CLIENT_EMAIL,
		"client_id": "110756440355940622187",
		"auth_uri": "https://accounts.google.com/o/oauth2/auth",
		"token_uri": "https://oauth2.googleapis.com/token",
		"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
		"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/admin-user%40actstuffyes.iam.gserviceaccount.com",
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

	console.log(data)



	return data;
}

export const Passage: React.FC<PassageProps> = ({selectedItem}) => {

	const passages = getData()
	
	return(
		<>
			<div className="container mx-auto p-4 sm:p-6 lg:p-8">
				<h2 className="text-xl font-bold mb-4 text-center">Please</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Here you render the passage */}
					{/* <div>
						<h2 className="text-lg font-bold mb-4 bg-yellow-200">Passage</h2>
						{passages && passages.values ? passages.values[selectedItem] : 'Loading...'}					</div>

					 Here you render the problems 
					* <div>
						<h2 className="text-lg font-bold mb-4">Questions</h2>
						{selectedItem.problems.map((problem, index) => (
							<p key={index} className="mb-2">{problem}</p>
						))}
					</div>  */}
				</div>
			</div>
		</>
	)
}