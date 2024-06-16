import Image from "next/image";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <button onClick={handleBack} className="absolute">
      <Image src="/arrow_back_ios.png" width={16} height={16} alt="arrow_back" />
    </button>
  );
}

export default BackButton;
