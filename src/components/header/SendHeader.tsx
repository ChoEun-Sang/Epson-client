import BackButton from "../common/button/BackButton";

function SendHeader() {
  return (
    <section className="flex w-full">
      <BackButton />
      <p className="w-full text-center">편지쓰기</p>
    </section>
  );
}

export default SendHeader;
