"use client";
import { useEffect, useState } from "react";

import { Product } from "vinbudin";

import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native";

type Props = {
  products: Product[];
};

const Vinbudin = ({ products }: Props) => {
  if (!products) {
    return <Text>Loading...</Text>;
  }
  const [wines, setWines] = useState<Product[]>(products);
  useEffect(() => {
    setWines(products.slice(0, 10));
  }, []);

  const getNext = () => {
    setWines(products.slice(0, wines.length + 10));
  };
  if (!wines) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View className=" flex-col-1 gap-24 ">
        {wines.map((product) => {
          return (
            <View
              key={product.productId}
              className="
              border- rounded-lg p-4 flex-row items-center justify-center mx-10 bg-white
              "
            >
              <View className="italic items-center">
                <Text className="text-red-900 text-xl my-8">
                  {product.productName}
                </Text>
                <View className="my-5 object-contain">
                  <Image
                    height={250}
                    width={250}
                    resizeMode="contain"
                    className="w-[100]"
                    source={{ uri: `${product.productImageUrl}` }}
                    alt=""
                  ></Image>
                </View>
                <View className="h-0.5 w-full bg-gray-300 my-5"></View>
                <View className="justify-items-start">
                  <Text className="text-xl ">
                    <Text className="not-italic">Land: </Text>
                    {product.productCountryOfOrigin.charAt(0).toUpperCase() +
                      product.productCountryOfOrigin.slice(1)}
                  </Text>

                  <Text className="my-3">
                    <Text className="not-italic text-xl">Region: </Text>
                    {product.productDistrictOfOrigin}
                  </Text>
                  <Text className="italic ">
                    <Text className="not-italic text-xl">Producer: </Text>
                    {product.productProducer}
                  </Text>
                  <Text className="my-3 ">
                    <Text className="not-italic text-xl">
                      Grape Varieties:{" "}
                    </Text>
                    {product.productWine}
                  </Text>
                  <Text>
                    <Text className="not-italic text-xl">Alcohol Volume: </Text>
                    {`${product.productAlchoholVolume} %`}
                  </Text>
                  <Text className="my-3 mb-8 font-semibold">
                    <Text className="not-italic">Price: </Text>
                    {`${product.productPrice} Kr`}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View className="w-100% flex justify-center items-center my-24 ">
        <TouchableOpacity className="border p-2" onPress={getNext}>
          <Text>Get more</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Vinbudin;
