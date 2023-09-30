import { Pssword as TPssword } from "../api/pssword/Pssword";

export const PSSWORD_TITLE_FIELD = "id";

export const PsswordTitle = (record: TPssword): string => {
  return record.id?.toString() || String(record.id);
};
