"use client";
import { useState } from "react";
import { Product } from "vinbudin";
import Eiginleikar from "./properties";
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
  onFilterChange: (country: string, grapes: string, region: string) => void;
};

const Form = ({ products, onFilterChange }: Props) => {
  const [countries, setCountries] = useState<string>("");
  const [grapes, setGrapes] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const wines = products;

  const land = wines
    .map((wine) => wine.productCountryOfOrigin)
    .filter((country, index, self) => self.indexOf(country) === index);

  const þrugur = wines
    .map((wine) => wine.productWine.replace(/\d+%?/g, "").split(","))
    .flat()
    .filter((þruga) => þruga && þruga.trim() !== "")
    .filter((þruga, index, self) => self.indexOf(þruga) === index)
    .map((wine) => wine.trim());

  const þrugurArr = [...new Set(þrugur)];

  return (
    <View className="flex w-full justify-center items-center min-h-screen bg-gray-100">
      <View
        id="wine-filter-form"
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        {/*----------------
           COUNTRIES
           ----------------*/}

        <Eiginleikar
          onChange={setCountries}
          name="Land"
          array={land}
        ></Eiginleikar>

        {/*----------------
             GRAPES
             ----------------*/}

        <Eiginleikar
          onChange={setGrapes}
          name="þrugur"
          array={þrugurArr}
        ></Eiginleikar>

        {/*----------------
             REGIONS
             ----------------*/}

        <View className="mb-4">
          <Text className="block text-sm font-medium text-gray-700 mb-1">
            Hérað
          </Text>
          <TextInput
            onChange={(e) => setRegion(e.nativeEvent.text)}
            id="region"
            placeholder="Finndu Hérað"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </View>

        <View className="text-center">
          <TouchableOpacity
            onPress={() => {
              onFilterChange(countries, grapes, region);
            }}
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
