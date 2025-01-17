import { errorHandler } from "./errorHandler";
import * as XLSX from "xlsx";

function readTxtFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Resolve with the text content when FileReader finishes reading
      resolve(reader.result as string);
    };

    reader.onerror = () => {
      // Reject with the error if FileReader encounters an error
      reject(reader.error);
    };

    // Read the file as text
    reader.readAsText(file);
  });
}

export const txtParser = async (formData: FormData): Promise<string> => {
  // Check if the file exists

  const file = formData.get("uploadedFile") as File;
  if (file) {
    // Read and return the content of the file
    return await readTxtFileContent(file);
  } else {
    // If file does not exist, return an error message or handle the situation accordingly
    throw new Error("File not found in FormData.");
  }
};

function readExcelFileContent(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e || !e.target) return;
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      let jsonData = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        raw: false,
      });

      // Filter out empty rows
      jsonData = jsonData.filter((row: any) =>
        row.some(
          (cell: any) => cell !== null && cell !== undefined && cell !== ""
        )
      );

      resolve(jsonData);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsBinaryString(file);
  });
}

export const excelParser = async (formData: FormData): Promise<any[]> => {
  // Check if the file exists

  const file = formData.get("uploadedFile") as File;
  if (file) {
    // Read and return the content of the file
    return await readExcelFileContent(file);
  } else {
    // If file does not exist, return an error message or handle the situation accordingly
    throw new Error("File not found in FormData.");
  }
};

export const getExcelLines = async (
  file: FormData | null
): Promise<string[] | void> => {
  if (file)
    return excelParser(file)
      .then((resp) => {
        if (resp.length === 1 || !resp[1].length)
          throw new Error("فایل خالی است!");
        const lines: string[] = [];

        const colCount = resp[0].length;
        for (let row = 0; row < resp.length; row++) {
          let line = "";
          for (let column = 0; column < colCount; column++) {
            // Console.WriteLine(row + "," + column);
            const data = resp[row][column];

            const str =
              !data && data !== 0
                ? ""
                : String(data)
                    .toString()
                    .replaceAll(",", "/")
                    .replaceAll("\n", " ");
            // .replace(",", "/").replace("\n", " ");

            line += str + ",";
          }
          line = line.substring(0, line.length - 1);

          lines.push(line);
        }

        return lines;
      })
      .catch(errorHandler);
};
