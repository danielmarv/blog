
import { createAdminClient } from "@/app/(root)/utils/utils";
import {appwriteConfig} from "@/app/(root)/utils/appwrite";
import { ID } from "node-appwrite";

export const uploadFile = async (file) => {
  try {
    const { storage } = await createAdminClient();
    const bucketFile = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(),
        file,
      );

    return bucketFile.json();
  } catch (error) {
    console.error("File upload error:", error);
  }
}