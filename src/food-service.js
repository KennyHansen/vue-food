const key = 'KmKbLrzzQtFhfFY2tyo9VRP09o3xWSt0YFhonsGI'

const searchUrl = `https://api.nal.usda.gov/ndb/search/?format=json&sort=r&max=25&offset=0&api_key=${key}&q=`


const nutrientsUrl = `https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${key}&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=`


export default {
  findFoods(query) {
    return fetch(searchUrl + query)
  },
  getNutrients(item) {
    return fetch(nutrientsUrl + item.ndbno)
  }
}