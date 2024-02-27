// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { authorizationInstance, customInstance } from "./api";
import { AxiosError } from "axios";

type payload = {
  html_attributions: any[];
  next_page_token: string;
  results: any[];
  status: string;
};
type ErrorData = unknown;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<payload | ErrorData>
) {
  try {
    const { apiKey, search } = req.body;
    const baseUrl: string = `/api/jenosize/searchPlaces?search=${search}`;
    const response = await authorizationInstance(apiKey).get(baseUrl);
    res.status(200).json(response.data);
  } catch (error: unknown) {
    console.error("Error posting data:", error);
    const { response } = error as AxiosError;
    res.status(Number(response?.status)).json(response!.data);
  }
}
