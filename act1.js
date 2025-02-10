function greetings(firstName, lastName, gender){
    if(gender == 'Female') {
        console.log(`Greetings! MS. ${firstName} ${lastName}`)
    }
    else if(gender == 'Male'){
        console.log(`Greetings! MR. ${firstName} ${lastName}`)
    }
}

greetings('Gelai', 'Gabriel', 'Female');
greetings('Jon', 'Snow', 'Male')