import { Account, Client, Databases, Storage } from 'appwrite';
import { PUBLIC_AUTHFAILURE_REDIRECT, PUBLIC_AUTH_REDIRECT, PUBLIC_AUTH_SUCCESS_REDIRECT, PUBLIC_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';

const appwriteEndpoint = PUBLIC_ENDPOINT;
const appwriteProjectId = PUBLIC_PROJECT_ID;
const authSuccessRedirect = PUBLIC_AUTH_SUCCESS_REDIRECT;
const authFailureRedirect = PUBLIC_AUTHFAILURE_REDIRECT;
const authRedirect = PUBLIC_AUTH_REDIRECT;
const appwriteDatabaseID = '65d44e8d5411f1203491';

const appwriteCollectionAnnouncements = '65d44ebe11e10c41378f';
const appwriteCollectionSettings = '6562f0e6c9eb2a87f8b2';
const appwriteBucketIdAnnouncement = '65dd8189a0fd282ff581';

const appwriteClient = new Client();

appwriteClient.setEndpoint(appwriteEndpoint).setProject(appwriteProjectId);
const appwriteAccount = new Account(appwriteClient);
const appwriteDatabase = new Databases(appwriteClient);
const appwriteStorage = new Storage(appwriteClient);

export {
	appwriteBucketIdAnnouncement,
	appwriteStorage,
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
