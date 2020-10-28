import "firebase/storage";
import { storage } from "../config/FirebaseConfig";

class UploadService {
  public upload(
    pathFolder: string,
    fileName: string,
    file: File | Blob
  ): Promise<string> {
    return storage
      .ref(`/${pathFolder}/${fileName}`)
      .put(file)
      .then((value: any) => {
        return storage
          .ref(pathFolder)
          .child(fileName)
          .getDownloadURL()
          .then((url: string) => {
            return url;
          });
      });
  }

  public uploadWithAutogenFileName(
    pathFolder: string,
    file: File | Blob
  ): Promise<string> {
    return this.upload(pathFolder, new Date().getTime().toString(), file);
  }

  
}
export const uploadService = new UploadService();
