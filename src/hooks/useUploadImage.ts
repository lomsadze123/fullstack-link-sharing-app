import { toast } from "react-toastify";
import { useLinkContext } from "../context/LinkContext";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect } from "react";
import { storage } from "../firebase/firebase";

const useUploadImage = () => {
  const notify = (message: string) => toast(message);
  const { user, setImageURL, imageURL } = useLinkContext();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${user?.uid}/${file.name}`);
      uploadBytesResumable(storageRef, file)
        .then(() => {
          notify("uploaded successfully, refresh page!");
        })
        .catch((error) => {
          console.error("Upload failed", error);
        });
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, "images/" + user?.uid);
        const images = await listAll(imageRef);
        const urls = await Promise.all(
          images.items.map(async (image) => {
            return getDownloadURL(image);
          })
        );
        setImageURL(urls[0]);
      } catch (error) {
        console.log("Error fetching image", error);
      }
    };

    if (user) {
      fetchImage();
    }
  }, [user]);
  return { imageURL, handleFileUpload };
};

export default useUploadImage;
