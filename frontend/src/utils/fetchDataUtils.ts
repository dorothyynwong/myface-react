import { DataType } from "../models/common";

export default async function fetchData<T>(url: string, type: DataType): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    if (type === DataType.UserModel) {
      return data as T;
    } else if (type === DataType.Posts) {
      return data.results as T;
    } else {
      throw new Error("Unknown data type");
    }
  } catch (error) {
    console.error("Fetch data error:", error);
    throw error;
  }
}