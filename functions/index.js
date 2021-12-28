const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();


// exports.getPlayerData = functions.firestore
//     .document('users/{userId}')
//     .onUpdate((change, context) => {
//         return change.after.data();
//     })

exports.getPlayerData = functions.https.onCall((data, context) => {
  const player = admin.firestore().collection("users").doc(data.id).get();
  return player;
});

exports.updatePlayerData = functions.https.onCall((data, context) => {
  if (data.pID === "1") {
    admin.firestore().collection("users").doc(data.id)
        .update({"player1": data.color});
  } else if (data.pID === "2") {
    admin.firestore().collection("users").doc(data.id)
        .update({"player2": data.color});
  } else if (data.pID === "3") {
    admin.firestore().collection("users").doc(data.id)
        .update({"player3": data.color});
  } else if (data.pID === "4") {
    admin.firestore().collection("users").doc(data.id)
        .update({"player4": data.color});
  }
});

// exports.getPlayerData = functions.https.onCall((data, context) => {
//     const player = admin.firestore().collection("users").doc(context)
//     return player.get().then(doc => {
//         return Promise.resolve();
//     })
// });
