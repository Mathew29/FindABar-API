
export class FindABar {
  getBar(bar) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.openbrewerydb.org/breweries/search?query=${bar}`
      // let url = `http://dinoipsum.herokuapp.com/api/?format=json`

      request.onload = function() {
        if (this.status === 200) {
          //return(request.response);
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
