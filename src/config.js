/** @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, measurementId: string, databaseURL: string, authDomain: string}} */
const config = {
    apiKey: 'your-api-key',
    authDomain: 'your-auth-domain',
    databaseURL: 'your-database-url',
    projectId: 'your-project-id',
    storageBucket: 'your-storage-bucket',
    messagingSenderId: 'your-messaging-sender-id',
    appId: 'your-app-id',
    measurementId: 'your-measurement-id'
};

const stunServer = 'stun:stun.l.google.com:19302';

export {
    config,
    stunServer,
}
