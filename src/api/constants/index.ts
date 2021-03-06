import path from "path";

const UPLOAD_DIR: string = path.resolve("src", "api", "upload");
const getUploadedFileDir = (name: string) => path.resolve(UPLOAD_DIR, name);

export { UPLOAD_DIR, getUploadedFileDir };
