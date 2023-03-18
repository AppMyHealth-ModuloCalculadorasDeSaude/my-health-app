import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RouteParams } from "../../App";
import { MyHealthModule } from "../modules";

type HomeProps = NativeStackScreenProps<RouteParams, "Home">;

export default function Home(props: HomeProps) {
  const modules: MyHealthModule[] = [
    MyHealthModule.Calculators,
    MyHealthModule.Codes,
    MyHealthModule.Diary,
    MyHealthModule.Remedies,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.helloText}>Olá, Fulano.</Text>
        <Text style={styles.letsTakeCareText}>
          Vamos cuidar da sua saúde hoje? ❤️
        </Text>

        <View style={styles.modulesContainer}>
          {modules.map((moduleName) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(moduleName);
              }}
            >
              <View style={styles.moduleCard}>
                <Text>{moduleName}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  topBar: {
    paddingVertical: 24,
    width: "100%",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  topBarText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  helloText: {
    fontSize: 20,
    marginBottom: 8,
  },
  letsTakeCareText: {
    fontSize: 16,
    color: "#212121",
  },
  modulesContainer: {
    marginTop: 32,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 24,
    rowGap: 24,
  },
  moduleCard: {
    width: 108,
    height: 108,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 5,

    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
});
