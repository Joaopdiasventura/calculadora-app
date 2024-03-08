import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [result, setResult] = useState<string>("");

  const addValue = (value: string)=>{
    setResult(result+value);
  }

  const calculate = () => {
    let calculatedResult = result.replace(/÷/g, "/").replace(/×/g, "*");
    
    if (calculatedResult.trim().length > 0) {
      try {
        const resultValue = eval(calculatedResult);
        if (!isNaN(resultValue)) {
          setResult(resultValue.toString());
        } else {
          throw new Error("Invalid calculation");
        }
      } catch (error) {
        alert("Cálculo Inválido");
      }
    }
  }  

  const clearLast = () => {
    setResult(result.slice(0,-1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={()=>{setResult("")}}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("(")}}>
          <Text style={styles.buttonText}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue(")")}}>
          <Text style={styles.buttonText}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("÷")}}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("7")}}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("8")}}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("9")}}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("×")}}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("4")}}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("5")}}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("6")}}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("-")}}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("1")}}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("2")}}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("3")}}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("+")}}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={clearLast}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue("0")}}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{addValue(".")}}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontSize: 50,
    color: "#fff",
    textAlign: "right",
    marginBottom: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#820000",
    padding: 20,
    borderRadius: 10,
    minWidth: "20%",
    alignItems: "center",
  },
  numberButton: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    minWidth: "20%",
    alignItems: "center",
  },
  operationButton: {
    backgroundColor: "#FFA500",
    padding: 20,
    borderRadius: 10,
    minWidth: "20%",
    alignItems: "center",
  },
  equalButton: {
    backgroundColor: "#008000",
    padding: 20,
    borderRadius: 10,
    minWidth: "20%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});