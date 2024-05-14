import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  listAll,
} from "firebase/storage";
import upload from "../../assets/icon-upload-image.svg";
import { storage } from "../../firebase/firebase";
import { useEffect } from "react";
import { useLinkContext } from "../../context/LinkContext";

const UploadImage = () => {
  const { user, setImageURL, imageURL } = useLinkContext();
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${user?.uid}/${file.name}`);
      uploadBytesResumable(storageRef, file)
        .then((snapshot) => {
          console.log("Uploaded a file!", snapshot);
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

  return (
    <div className="bg-whiteBold p-4 mt-7 md:mt-10 md:flex md:justify-between md:items-center md:p-6">
      <h3 className="text-blackLight mb-4 md:m-0">Profile picture</h3>
      <div className="md:flex md:items-center md:gap-5">
        <form className="size-[193px]">
          <label
            style={{
              backgroundImage: `url(${imageURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="px-9 py-[60.5px] bg-purpleLight block rounded-xl lg:cursor-pointer"
            htmlFor="myFile"
          >
            <img
              className="mx-auto mb-2"
              src={upload}
              alt="upload image icon"
            />{" "}
            <span className="text-purple font-semibold">+ Upload Image</span>
          </label>
          <input
            className="hidden"
            type="file"
            id="myFile"
            name="filename"
            onChange={handleFileUpload}
          />
        </form>
        <p className="text-xs text-blackLight mt-5 md:m-0 md:max-w-[127px]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
};

export default UploadImage;
