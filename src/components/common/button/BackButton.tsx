import Image from "next/image";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex py-2">
      <button onClick={handleBack}>
        <Image src="/arrow_back.png" width={24} height={24} alt="arrow_back" />
      </button>
    </div>
  );
}

export default BackButton;
