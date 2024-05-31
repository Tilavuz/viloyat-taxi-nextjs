import { Button } from "../ui/button";
import { Chrome } from "lucide-react";
import Loading from "../loading";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import useLoading from "@/hooks/use-loading";
import { auth, googleProvider } from "@/app/firebase-config";

export default function LoginGoogleBtn() {
  const { pending, handleLoading } = useLoading();
  const context = useContext(AuthContext);

  const loginGoogle = async () => {

    try {
      handleLoading(true)
      const result = await signInWithPopup(auth, googleProvider);
      context?.handleUser(result.user)
      console.log('Google orqali kirildi');
    } catch (error) {
      console.error('Google orqali kirishda xato: ', error);
    }finally {
      handleLoading(false)
    }
  }

  return (
    <Button
      onClick={loginGoogle}
      variant={"destructive"}
      type="button"
      className="flex-1 flex items-center gap-2"
    >
      <Chrome />
      Google
      {pending ? <Loading styles={"w-max"} size={16} /> : ""}
    </Button>
  );
}
