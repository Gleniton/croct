import csv from "csv-parser";

export const createCsvParserWithHeaders = (separator = ",") => {
    return csv({
        separator: separator,
        skipLines: 0,
        mapValues: ({ header, value }) => (header === "timestamp" ? parseInt(value) : value),
    });
};
