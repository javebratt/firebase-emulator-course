import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const newFunctionCreated = functions.firestore
  .document('functions/{functionId}')
  .onCreate((snap, context) => {
    const functionId: string = snap.id;
    const functionBody = snap.data();

    console.log(functionId);
    console.log(functionBody.name);
    return;
  });

export const helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.send({ message: 'Hello from Firebase emulator!' });
});

export const sayHello = functions.https.onCall((data, context) => {
  return { message: 'Hello from the emulator' };
});
