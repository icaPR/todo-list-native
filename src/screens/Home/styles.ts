import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  upContainer: {
    height: 173,
    margin: 0,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  downContainer: {
    height: "100%",
    backgroundColor: "#1A1A1A",
  },
  form: {
    marginTop: -30,
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    width: 271,
    height: 54,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    color: "#D9D9D9",
    backgroundColor: "#262626",
  },
  button: {
    width: 52,
    height: 52,
    marginLeft: 5,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
});
