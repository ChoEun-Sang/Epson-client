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
import { signin } from "@/lib/api/api";
import useUserStore from "@/store/useUserStore";
import { ChangeEvent, useState, FormEvent } from "react";
import { toast } from "sonner";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserData } = useUserStore();

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
      if (data) {
        const userData = {
          img: "",
          id: data.userId,
          username: data.username,
          myFavorite: "",
          epsonDevice: "",
        };
        setUserData(userData);
        toast.success(`${userData.username}님 환영합니다!`);
      }
    } catch (err) {
      setError("로그인 실패. 다시 확인해주세요.");
      console.error("로그인 중 오류 발생:", err);
      toast.error("로그인에 실패했습니다!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="body3">로그인</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[21.5rem] ">
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription className="text-gray-8 footnote2">
            환영합니다! 아이디와 비밀번호를 입력해주세요!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignin}>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-1">
              <Label htmlFor="아이디" className="sr-only">
                아이디
              </Label>
              <Input
                id="아이디"
                placeholder="아이디를 입력해주세요."
                value={email}
                onChange={handleChangeEmail}
                className="focus-visible:ring-transparent"
              />
              <Label htmlFor="비밀번호" className="sr-only">
                비밀번호
              </Label>
              <Input
                id="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={handleChangePassword}
                className="focus-visible:ring-transparent"
              />
            </div>
          </div>
          <Spacing size={8} />
          <DialogFooter className="sm:justify-start">
            <Button className="w-full bg-primary-8" type="submit" disabled={loading}>
              {loading ? "로그인 중..." : "로그인"}
            </Button>
          </DialogFooter>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Signin;
