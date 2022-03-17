/** User Authentication */

// Init firebase auth 
const auth = firebase.auth();

// Init object grabbers
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

// Init auth providers
const gmailProvider = new firebase.auth.GoogleAuthProvider();

const emailProvider = null;

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

/** Sign in event handlers */

signInBtn.onclick = () => auth.signInWithPopup(gmailProvider);   // gmail
// signInBtn.onclick = () => auth.signInWithPopup(emailProvider);      // email

signOutBtn.onclick = () => {auth.signOut()};

// Sets the changes to the UI
auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedIn.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
})

/** Firestore */