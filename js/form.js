var firebaseConfig = {
    apiKey: "AIzaSyCM5GDx2MOrbf59t6ow6cbvXT9icM-jWfk",
    authDomain: "contact-form-4b31a.firebaseapp.com",
    projectId: "contact-form-4b31a",
    storageBucket: "contact-form-4b31a.appspot.com",
    messagingSenderId: "462529743201",
    appId: "1:462529743201:web:da3408b7a70d9b703bdd20"
};
firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();
    
    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    
    // save message
    saveMessage(name, email, message);
    
    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    // reset the form
    document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}