import Spacing from "@/components/common/spacing/Spacing";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useMailListQuery from "@/hooks/queries/useMailListQuery";
import { authUser, signin } from "@/lib/api/api";
import useRecentLettersStore from "@/store/useRecentLettersStore";
import useUserStore from "@/store/useUserStore";
import { ChangeEvent, useState, FormEvent } from "react";
import { toast } from "sonner";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserData } = useUserStore();
  const { data: mailListData, isLoading: isMailListLoading } = useMailListQuery("received");
  const { setRecentLetters } = useRecentLettersStore();

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await signin(email, password);
      const checkedData = await authUser();

      if (!isMailListLoading && mailListData) {
        const slicedData = mailListData.slice(0, 4);
        setRecentLetters(slicedData);
      } else {
        setRecentLetters([]);
      }

      if (data) {
        const userData = {
          img: "",
          id: data.userId,
          username: data.username,
          myFavorite: "",
          epsonDevice: checkedData.epsonDevice,
        };

        setUserData(userData);
        toast.success(`Welcome, ${userData.username}!`);
      }
    } catch (err) {
      setError("Login failed. Please check again.");
      console.error("Error occurred during login:", err);
      toast.error("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="body3">Log In</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[21.5rem] ">
        <DialogHeader>
          <DialogTitle className="callout2">Log In</DialogTitle>
          <DialogDescription className="text-gray-8 footnote2">
            Welcome! Please enter your ID and password!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignin}>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-1">
              <Label htmlFor="ID" className="sr-only">
                ID
              </Label>
              <Input
                id="ID"
                type="email"
                placeholder="Please enter your ID."
                value={email}
                onChange={handleChangeEmail}
                className="focus-visible:ring-transparent"
              />
              <Label htmlFor="Password" className="sr-only">
                Password
              </Label>
              <Input
                id="Password"
                type="password"
                placeholder="Please enter your Password."
                value={password}
                onChange={handleChangePassword}
                className="focus-visible:ring-transparent"
              />
            </div>
          </div>
          <Spacing size={8} />
          <DialogFooter className="sm:justify-start">
            <Button className="w-full bg-primary-8" type="submit" disabled={loading}>
              {loading ? "Loggin in" : "Log in"}
            </Button>
          </DialogFooter>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Signin;
