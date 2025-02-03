import { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

type Props = {
  name: string;
  array: string[];
  onChange: (value: string) => void;
};

const Eiginleikar = ({ name, array, onChange }: Props) => {
  const [selectedCountry, setSelectedCountry] = useState(`Veldu ${name}`);
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  return (
    <>
      <View className="mb-4 w-full">
        <Text className="block text-sm font-medium text-gray-700 mb-1">
          {name}
        </Text>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedCountry(itemValue);
            onChange(itemValue);
          }}
          id="grape"
          className=""
        >
          <Picker.Item label={`Veldu ${name}`} value={`Veldu ${name}`} />

          {array.map((country, index) => {
            return (
              <Picker.Item label={country} key={country} value={`${country}`} />
            );
          })}
        </Picker>
      </View>
    </>
  );
};
export default Eiginleikar;
