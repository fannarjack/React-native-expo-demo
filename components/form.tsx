"use client";
import { useState } from "react";
import { Product } from "vinbudin";
import Eiginleikar from "./eiginleikar";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

type Props = {
  products: Product[];
};

const Form = ({ products }: Props) => {
  const [wines, setWines] = useState(products);

  const land = wines
    .map((wine) => wine.productCountryOfOrigin)
    .filter((country, index, self) => self.indexOf(country) === index);

  const þrugur = wines
    .map((wine) => wine.productWine.replace(/\d+%?/g, "").split(","))
    .flat()
    .filter((þruga) => þruga && þruga.trim() !== "")
    .filter((þruga, index, self) => self.indexOf(þruga) === index)
    .map((wine) => wine.trim());
  console.log(þrugur);

  const þrugurArr = [...new Set(þrugur)];
  console.log(þrugurArr);

  return (
    <View className="flex justify-center items-center min-h-screen bg-gray-100">
      <View
        id="wine-filter-form"
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        {/*----------------
           COUNTRIES
           ----------------*/}

        <Eiginleikar name="Land" array={land}></Eiginleikar>

        {/*----------------
             GRAPES
             ----------------*/}

        <Eiginleikar name="þrugur" array={þrugurArr}></Eiginleikar>

        {/*----------------
             REGIONS
             ----------------*/}

        <View className="mb-4">
          <Text className="block text-sm font-medium text-gray-700 mb-1">
            Hérað
          </Text>
          <TextInput
            value="text"
            id="region"
            placeholder="Finndu Hérað"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </View>

        <View className="text-center">
          <TouchableOpacity className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
            Submit
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
