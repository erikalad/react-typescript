import { RandomFox } from "@/components/RandomFox";


export default function Home() {
  const random = () => Math.floor(Math.random() *123)+1;

  return (
  <div>
    <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`}/>
  </div>
  )
}
