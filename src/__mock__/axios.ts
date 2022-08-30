// easier to merge objects
import _ from "lodash";

// cannot require axios, otherwise it recursively mocks
const axios = jest.requireActual("axios");
jest.unmock("axios");

const MockAdapter = require("axios-mock-adapter");
const mockAxios = new MockAdapter(axios);

// nothing important seems to be overwritten
// module.exports = _.assignIn(axios, mockAxios);
export default _.assignIn(axios, mockAxios);
