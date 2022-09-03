// // easier to merge objects
import _ from "lodash";

// cannot require axios, otherwise it recursively mocks
const axios = jest.requireActual("axios");
jest.unmock("axios");

const MockAdapter = require("axios-mock-adapter");
const test = axios.create();
const mockAxios = new MockAdapter(test);
console.log(
  mockAxios,
  "這是mockAxios!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
);
console.log("在印出結果", _.assignIn(axios, mockAxios));
// nothing important seems to be overwritten
// module.exports = _.assignIn(axios, mockAxios);

// export default _.assignIn(axios, mockAxios);
export default test;

// export default {
//   post: jest.fn().mockResolvedValue({ data: { hasAccount: true } }),
// };
