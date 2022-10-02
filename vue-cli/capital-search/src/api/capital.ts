import axios from "axios";

export default class CapitalAPI{
  //https://countriesnow.space/api/v0.1/countries/capital
  static async findCapital(country: string): Promise<string> {
    return axios.post("https://countriesnow.space/api/v0.1/countries/capital", {
      country: country
    }).then(response => response.data.data.capital)
      .catch(() => "")
  }
}