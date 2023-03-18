import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RouteParams } from "../../../App";
import { MyHealthModule } from "../../modules";

type CalculatorsProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Calculators
>;

export default function Calculators(props: CalculatorsProps) {
  return (
    <View>
      <Text>Hello, world</Text>
    </View>
  );
}