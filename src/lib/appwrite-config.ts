import { Account, Client, Databases } from 'appwrite';
import { PUBLIC_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';

const appwriteEndpoint = PUBLIC_ENDPOINT;
const appwriteProjectId = PUBLIC_PROJECT_ID;
const authSuccessRedirect = 'https://seedkurdistan.ngo';
const authFailureRedirect = 'https://seedkurdistan.ngo';
const authRedirect = 'http://localhost:5173/success';
const appwriteDatabaseID = '6534d12491751e1f3c6b';

const appwriteCollectionAnnouncements = '6534d12f68a1b7c2ae77';
const appwriteCollectionSettings = '6562f0e6c9eb2a87f8b2';

const appwriteClient = new Client();

appwriteClient.setEndpoint(appwriteEndpoint).setProject(appwriteProjectId);
const appwriteAccount = new Account(appwriteClient);
const appwriteDatabase = new Databases(appwriteClient);

export {
	appwriteAccount,
	appwriteCollectionSettings,
	appwriteDatabaseID,
	appwriteDatabase,
	appwriteClient,
	authSuccessRedirect,
	authFailureRedirect,
	authRedirect,
	appwriteCollectionAnnouncements
};
