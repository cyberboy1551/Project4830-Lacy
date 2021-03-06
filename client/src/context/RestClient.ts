import axios from "axios";
import { IUser } from "../constants";

const ENDPOINT = "http://ec2-18-191-134-20.us-east-2.compute.amazonaws.com:5000";

export const Login = async (
  username: string,
  password: string
): Promise<void> => {
  const response = await axios.post(ENDPOINT + "/login", {username:username, password:password});
  return Promise.resolve(response.data);
};

export const Register = async (
  username: string,
  password: string
): Promise<void> => {
  const response = await axios.post(ENDPOINT + "/register", {username:username, password:password});
  return Promise.resolve(response.data);
};
