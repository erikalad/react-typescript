import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";

const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);



  return (
    <div>
      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image} />
        </div>
      ))}
    </div>
  );
}
