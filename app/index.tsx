import { Text, View } from "react-native";
import Vinbudin from "../components/vin";
import { getProducts, CategoryData } from "vinbudin";
import { useState, useEffect } from "react";
import Form from "@/components/form";

export default function Index() {
  const [products, setProducts] = useState<CategoryData>({ red: [] });
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts({
        red: true,
      });
      setProducts(products);
    };
    fetchProducts();
  }, []);

  if (!products.red) {
    return <>Loading...</>;
  }
  return (
    <View className="flex flex-1 items-center justify-center">
      <Form products={products.red}></Form>
      <Text className="">Edit app/index.tsx to edit this screen.</Text>
      <Vinbudin products={products.red}></Vinbudin>
    </View>
  );
}
