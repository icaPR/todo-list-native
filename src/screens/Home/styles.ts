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
    alignItems: "center",
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
    textDecorationLine: "none",
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
  info: {
    width: "82%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  infoCreate: {
    width: "50%",
    flexDirection: "row",
  },
  infoComplete: {
    width: "50%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  textCreate: {
    marginRight: 5,
    fontSize: 14,
    fontWeight: "700",
    color: "#4EA8DE",
  },
  textComplete: {
    marginRight: 5,
    fontSize: 14,
    fontWeight: "700",
    color: "#8284FA",
  },
  numberCreate: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
  },
  numberInfo: {
    width: 25,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 9,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "700",
    color: "#D9D9D9",
    backgroundColor: "#333333",
  },
});
