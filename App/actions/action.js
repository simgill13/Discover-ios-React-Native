export const USER_DATA = 'USER_DATA';
export const userData = (displayName, googleId) => ({
  type: USER_DATA,
  displayName,
  googleId
})



// creating an async action to post a new user 



export const fetchUser = (name,email,password) => dispatch => {
    console.log("fetching user data...");
    fetch(`http://localhost:8080/api/user/${email}`) 
    .then(response => response.json())
    .then(json => {
	    if (json == null) {
	      	console.log(`Sorry, no document in DB relates to ${email}`);
	      	console.log('soo,going to post a new user to the DB now ...');
	    	fetch('http://localhost:8080/api/user', {
        		method: 'POST',
        		headers: {
            	'Content-Type': 'application/json'
        		},
        		body: JSON.stringify({name,email,password})
    		})
    		.then(response => response.json())
    		.then(json => {
    			console.log('I have posted this user')
      			console.log(json)
      			// dispatch(userData(json.name,json.email,json.googleId,json.profilePicURL,json.accessToken,json.favoriteVacations))
      		})
	    }
      	else if (json !== null){
      		console.log(`User ${email} was found in the USER DB`)
      		console.log(json)
      		// dispatch(userData(json.name,json.email,json.googleId,json.profilePicURL,json.accessToken,json.favoriteVacations))
      	}
    })
}