var password = new Promise(function(resolve, reject) {
  var x = "mynameissanjeet1";
  var y = "mynameissanjeet";
  if (x == y) {
    console.log("password updated");
    resolve();
  }
  else {
    console.log("both password should match");
    reject();
  }
});
password.then(function() {
  console.log("you have succefully updated you password")
}).
  catch(function() {
    console.log("password of both field should same")
  });