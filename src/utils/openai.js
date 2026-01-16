import OpenAI from "openai";
import { API_CONSTANTS } from "../constants/app-constants";

const client = new OpenAI({
  apiKey: API_CONSTANTS.gpt_api_key,
  dangerouslyAllowBrowser: true,
});

export { client };
