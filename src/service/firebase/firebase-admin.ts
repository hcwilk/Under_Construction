import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(<admin.ServiceAccount>{
	  "type": "service_account",
      "project_id": "act-ai",
	  "private_key_id": process.env.PRIVATE_KEY_ID,
	  "private_key": `-----BEGIN PRIVATE KEY-----\n${process.env.PRIVATE_KEY!.split("\\n").join("\n")}\n-----END PRIVATE KEY-----\n`,
	  "client_email": `${process.env.CLIENT_EMAIL}`,
	  "client_id": `${process.env.CLIENT_ID}`,
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	  "client_x509_cert_url": `${process.env.CLIENT_CERT}`,
	}),
    databaseURL: 'https://your-project-name.firebaseio.com',
  });
}

const auth = admin.auth();
const firestore = admin.firestore();

export { auth, firestore }
