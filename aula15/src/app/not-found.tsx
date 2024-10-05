import Image from "next/image";

export default function NotFound() {
    
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <p>O conteúdo que você está tentando acessar não está disponível!</p>
        <Image src="/img/mouse.jpg" alt="mouse" width={50} height={50} priority={true} />
    </div>
  )
}
