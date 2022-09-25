import api from "superagent";
const url = "https://jsonplaceholder.typicode.com/users";

export default class API {
  static async getUsers() {
    console.log(url);
    return await api
      .get(url)
      .set("accept", "json")
      .then((res) => (res.body));
  }
}