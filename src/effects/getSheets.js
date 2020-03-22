import Papa from "papaparse";
import { SHEETS_URL } from "../components/constants";

const getSheets = () => {
  return new Promise((resolve, reject) => {
    Papa.parse(SHEETS_URL, {
      download: true,
      header: true,
      complete: (results, file) => {
        resolve(results.data);
      },
      error: (error, file) => {
        reject(error);
      },
    });
  });
};

export default getSheets;
