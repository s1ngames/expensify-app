import * as firebase from 'firebase';//getting all named exports


const config = {
    apiKey: "AIzaSyCvEtesxRPeEhSRS5aTB7NcL59MfnN2bsg",
    authDomain: "expensify-ed79f.firebaseapp.com",
    databaseURL: "https://expensify-ed79f.firebaseio.com",
    projectId: "expensify-ed79f",
    storageBucket: "expensify-ed79f.appspot.com",
    messagingSenderId: "154907310469"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


/* //child_removed  -- returns the child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


//child_added -- fires one time at startup for all , 
//and fires all on every child added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}); */







/* database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

 */



/* database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
}); */






/* 
database.ref('expenses').push({
    description: 'expense4',
    note: 'expense note',
    amount: 45,
    createdAt: 7080
}); */




/* database.ref('notes/-L3P-4htjFP-DMouoVvF').update({
    body: 'Buy Food'
});
 */
/* database.ref('notes/-L3P-4htjFP-DMouoVvF').once('value',(snapshot)=>{
console.log(snapshot.val().title);
}); */





//array in firebase - no support.
//regular objects with random id as a branch with push()
/* database.ref('notes').push({
    title:'Course Topics',
    body :'React,native'
});
 */



//objects handling

/* const onValueChange = (snapshot) => {
   // console.log(snapshot.val());
   const data = snapshot.val();
   console.log(`${data.name} is a ${data.job.title} at 
   ${data.job.company}`);
};

database.ref().on('value', onValueChange,(e)=>{
    console.log(e);
    
}); */
//can be with function inside directly

/* 
setTimeout(() => {
    database.ref('age').set(50);
}, 3000);

setTimeout(() => {
    database.ref().off(onValueChange);
    //or without parameters to cancel all nofitications
}, 6000);

setTimeout(() => {
    database.ref('age').set(60);
}, 9000);


 */

/* database.ref('location/city').once('value')
.then((snapshot) => {
const val = snapshot.val();
console.log(val);

}).catch((e) => {
console.log('error',e);

}); */



/* database.ref().set({
    name: 'Nir Beckermus',
    age: 28,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'K.ata',
        country: 'Israel'
    }
}).then(() => {
    console.log('data saved!');
}).catch((e) => {
    console.log(e);
});

database.ref().update({
    stressLevel:9,
    'job/company' :'Amazon',
    'location/city':'Seattle'
}); */


//database.ref().set('This is my data.');
//database.ref('age').set(29);
//database.ref('location/city').set('Kiryat Ata');
/* 
database.ref('attributes').set({
    height: 173,
    weight: 93
}).then(() => {
    console.log('data saved!');
}).catch((e) => {
    console.log(e);
}); */


/* database.ref('isSingle').remove().then(() => {
    console.log('data saved!');
}).catch((e) => {
    console.log(e);
});; */

/* database.ref('isSingle').set(null).then(() => {
    console.log('data saved!');
}).catch((e) => {
    console.log(e);
});;


database.ref().update({//can add also new values and delete with null
    name: 'Mizush',//cant update nested objects
    age: 27,
    job: 'teacher'
});

database.ref().update({//nested objects
    job: 'Electronics',
    'location/city': 'casarea'
}); */