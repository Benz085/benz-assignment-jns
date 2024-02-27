// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { customInstance } from "./api";
import { AxiosError } from "axios";

type payload = {
  apiKey: string;
};
type ErrorData = unknown;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<payload | ErrorData>
) {
  try {
    const baseUrl: string = "/api/jenosize/login/google";
    const jsonStr = JSON.stringify(req.body);
    const response = await customInstance().post(baseUrl, {
      idToken: jsonStr,
    });
    res.status(200).json(response.data);
  } catch (error: unknown) {
    console.error("Error posting data:", error);
    const { response } = error as AxiosError;
    res.status(Number(response?.status)).json(response!.data);
  }
}
