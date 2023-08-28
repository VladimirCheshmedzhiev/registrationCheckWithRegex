function processRegistrations(inputs) {
    let successfulRegistrations = 0;
  
    for (let i = 1; i <= inputs[0]; i++) {
      const registration = inputs[i];
      const usernameMatch = registration.match(/U\$([A-Z][a-z]+)U\$/);
      const passwordMatch = registration.match(/P@\$(\w+)P@\$/);
  
      if (usernameMatch && passwordMatch) {
        const username = usernameMatch[1];
        const password = passwordMatch[1];
  
        if (/^[A-Z][a-z]{2,}$/.test(username) && /^[A-Za-z]{5,}\d+$/.test(password)) {
          console.log(`Registration was successful\nUsername: ${username}, Password: ${password}`);
          successfulRegistrations++;
        } else {
          console.log("Invalid username or password");
        }
      } else {
        console.log("Invalid username or password");
      }
    }
  
    console.log(`Successful registrations: ${successfulRegistrations}`);
  }
  
  const input = (["3",
  "U$MichaelU$P@$asdqwe123P@$",
  "U$NameU$P@$PasswordP@$",
  "U$UserU$P@$ad2P@$"])
  ;
  
  processRegistrations(input);
  