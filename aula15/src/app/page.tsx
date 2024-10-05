import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my home page</h1>
      <Image src="/img/mouse.jpg" alt="mouse" width={50} height={50} priority={true} />
    </div>
  )
}
