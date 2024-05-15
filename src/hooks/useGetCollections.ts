import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useLinkContext } from "../context/LinkContext";
import { firestore } from "../firebase/firebase";

const useGetCollections = () => {
  const { user } = useLinkContext();
  const colRef = collection(firestore, "links");
  const queryCol = user && query(colRef, where("owner", "==", user?.uid));
  const [links] = useCollection(queryCol);

  const usersColRef = collection(firestore, "users");
  const usersQueryCol =
    user && query(usersColRef, where("owner", "==", user?.uid));
  const [users] = useCollection(usersQueryCol);

  return { links, users };
};

export default useGetCollections;
