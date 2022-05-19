import fs from "fs";
// import express from "express";
// interface ImageParams {
//   filename: string;
//   width: number;
//   height: number;
// }
const isImgAvailable = async (
  filename: string,
  path: string
): Promise<boolean> => {
  if (!filename) return false;
  return (await getAvailableImgs(path)).includes(filename);
};

const getAvailableImgs = async (directory: string): Promise<string[]> => {
  try {
    return fs.readdirSync(directory).map((file) => file.split(".")[0]);
  } catch (error) {
    return [];
  }
};

export { getAvailableImgs, isImgAvailable };
