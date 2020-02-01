const functions = require('firebase-functions');
const admin = require('firebase-admin')
const adminKey = require('./key.json')

admin.initializeApp({
    credential: admin.credential.cert(adminKey)
  })

exports.sendAdminNotification = functions.database.ref('/stations').onWrite(event => {    

    const payload = {notification: {
        title: 'Test',
        body: 'Test'
        }
    };

    return admin.messaging().sendToTopic("/topics/station_status",payload)
    .then((response) => {
         console.log('Notification sent successfully:',response);
         return 0
    }) 
    .catch((error) => {
         console.log('Notification send failed:',error);
    });
    
})