import { google } from "googleapis";


async function getData() {

	console.log('hitting')

	const creds = {
		"type": "service_account",
		"project_id": "actstuffyes",
		"private_key_id": "5352ddeff050c932c05ec46e32b144e01fcbae9f",
		"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyRFFVdkFk6LNU\nYUWXBfpI/o+zUyLoFvFGNQcuV1hgQZMEWSJWMdGzqqpVAN9HPpjpUBAi7quSY0RQ\nb0rLLAxkxdE/HlR8DBKxkPdN4AaMiTrkxL+3fiL8RZIlOxKg2Xbar+RW68AAZfnw\ncUTUzP+Fmovj2KTvRUKdanl6F7Zs6qr7iEx8ii/rzRvm1EXMTPjjtXEu9gBwGa3J\nJ63+qCR+gFD8DPSCr1hNTSdGZ4roabZX5SaCUH+t5F/dYporR2FrgpHcGlewP0nc\ncs3jPvoOIp8vnS0WPiqUBGK0p57LG2ZFigLJQFJV55s2JNS2GehJ7sWVXg7In88T\ndHLlqDlDAgMBAAECggEAKW63eKWDjXCIPZReGDvLcCu6OnOYKVkruqWYhazHXZfg\nE6Kj2GS72IZSEG+jdWuXHqL9HSFbvypTNl6ng5E5UDKp74GdITetIJgQ4oiu/Pro\nNUOFS6CFgRyqWvzf14KznSBEce9ZML6C2N96n/sFaIgC+3He4721PeEBWt8oBygg\nFYyKPIpKjABgJCgnHfDiqhIXgd3vRn2KaQ5ANqWo0p4X3iSsmizCd2dC99VEjQdr\nwT1Tp+d0ubjFearuLIhT0uH9GHrSHjpmcpxAYUSWoyCMBNzNhIA3t2AlvgG+bWs2\n2Wo2uHQcndKj8GuN7Alc3YNdLomsHWWUdlKlQDkAAQKBgQDje9AyZsUNQBjgUTKO\nA8qmlk/5G3rsb9Ni4/Tcm8HVtRm+GejMigGELezGFQn0PHjpsmgOitCsh1ZrE5Ad\nqA2SBgprFKJyaXZxKeGyJ4CpQ+M0kyyim/M04LIeCKd1qPilQt8+6n9b/4j0AjHG\nzea1jUs6bcflwtPk47zX3/JWAQKBgQDInRY5IC5tlxVfirxrT6KUidIUyF01zx41\nz0V8VEepRPtfUP1AuvEcqFsYml65l01sxREt7eaaqQRJ/bbtDzenJAbxFzNqO9Ff\neG/7gZNtKiCBpW8oCR7sKT1XhsP8PWb8F5+81W3I3Ad/WmlmybDltrgR2GmciLnd\n4rCwN8G3QwKBgE37KZm9hRtPt7dd3li0kAmfSXb5pp/ajbo+rrfZZQ8fb92tABLt\n1Cs9mwckOy9Qc5qZH/asO3CJTGSUZjjkXRKLo5KlljJmWMXeN5Jc3EwqC38AXLK5\nhxu/Uw/co5s/+0ybqe/lbxdYd9g90FZ4Svg9oWY8L+Rhb0Xtk9Tk3iwBAoGAFSlE\ny9fSLesu7PoUb/lhe+uhxmFwO5nSZPitKrU1LezB20cOv8I4Zr53hXvbHBaSqzOK\nYV7j4VKMykVCA3WEeFP7i3jYCo+uwTRSE6SSaYR1E1fhBscXhO/AsbfceoH7mAHh\n7qhQwUw8WjmuPpJt331Lo05BrapaeMZNvvjSrUMCgYEAsl++73BNI7kKw+F0GmdO\nxzMLf9sjrPqgfQpaV26g+EGdUBOv2XFqKdq+YKEyjnSAZzia7lKNS3ADzdGSuM6t\nYAmdTnaiOKTLPopmea9tOGWwzrx17bFEatVAq4yPVopBBtn/2zMF1HYNNxEQlnyE\nSwcQ967bC3Ja+p/qlXu+epM=\n-----END PRIVATE KEY-----\n",
		"client_email": "admin-user@actstuffyes.iam.gserviceaccount.com",
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


async function App() {

	const data = await getData();
	console.log('here',data)

	return (
		<>
			Testing
		</>
		)
}

export default App