import { Text, View } from "react-native";
import Vinbudin from "../components/vin";
import { getProducts, CategoryData, Product } from "vinbudin";
import { useState, useEffect } from "react";
import Form from "@/components/form";
import { ScrollView } from "react-native";

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts({
        red: true,
      });
      if (!products.red) {
        return;
      }
      setProducts(products.red);
      setFilteredProducts(products.red);
    };
    fetchProducts();
  }, []);

  const onFilterChange = (country: string, grapes: string, region: string) => {
    const filteredProducts = products.filter((product) => {
      return (
        (!country || product.productCountryOfOrigin === country) &&
        (!grapes || product.productWine.includes(grapes)) &&
        (!region || product.productDistrictOfOrigin === region)
      );
    });

    setFilteredProducts(filteredProducts);
  };

  if (!products) {
    return <>Loading...</>;
  }
  return (
    <ScrollView>
      <View className="flex flex-1 items-center justify-center">
        <Form products={products} onFilterChange={onFilterChange}></Form>
        <Vinbudin products={filteredProducts}></Vinbudin>
      </View>
    </ScrollView>
  );
}
