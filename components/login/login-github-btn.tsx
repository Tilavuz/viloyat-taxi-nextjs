import { Button } from "../ui/button";
import { Github } from "lucide-react";
import Loading from "../loading";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import useLoading from "@/hooks/use-loading";
import { auth } from "@/app/firebase-config";

export default function LoginGithubBtn() {
  const { pending, handleLoading } = useLoading();
  const context = useContext(AuthContext);

  const loginGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      handleLoading(true);
      const result = await signInWithPopup(auth, provider);
      context?.handleUser(result.user);
      console.log("GitHub orqali kirildi");
    } catch (error) {
      console.error("GitHub orqali kirishda xato: ", error);
    } finally {
      handleLoading(false);
    }
  };

  return (
    <Button
      onClick={() => loginGitHub()}
      type="button"
      className="flex-1 flex items-center gap-2"
    >
      <Github />
      Github
      {pending ? <Loading styles={"w-max"} size={16} /> : ""}
    </Button>
  );
}
