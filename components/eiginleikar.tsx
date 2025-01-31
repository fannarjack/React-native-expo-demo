import react from "react";
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
};

const Eiginleikar = ({ name, array }: Props) => {
  return (
    <>
      <View className="mb-4">
        <Text className="block text-sm font-medium text-gray-700 mb-1">
          {name}
        </Text>
        <Picker
          id="grape"
          name="grape"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Veldu {name}</option>

          {array.map((country, index) => {
            return (
              <option key={index} value="">
                {country}
              </option>
            );
          })}
        </Picker>
      </View>
    </>
  );
};
export default Eiginleikar;
