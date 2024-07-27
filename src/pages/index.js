import Card from "@/components/home/Card";
import CarouselComponent from "@/components/home/Carousel";
import { Inter } from "next/font/google";
import CardData from '../store/cardData.json'

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  // console.log(CardData)

  let categories = new Set() // we can't run map func on set
  let CategoryArray;

  console.log(CategoryArray, categories)
  const foodData = []

  const handleCategory = () => {
    CardData.map((data) => {
      return foodData.push(data), categories.add(data.category)
    })
  }

  handleCategory();
  CategoryArray = [...categories]

  return (
    <div>
      <CarouselComponent />
      {
        CategoryArray.map((category) => {
          return (
            <div key={category}  className="container mx-auto">
              <div key={category} className="text-4xl mt-10 mb-3 uppercase font-bold">
                {category}
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center">
                <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {foodData?.filter((foodData) => category === foodData.category)?.map((data) => {
                    return <Card key={data.id} foodData={data} />
                  })
                  }
                </div>

              </div>
            </div>
          )
        })
      }
    </div>
  );
}
