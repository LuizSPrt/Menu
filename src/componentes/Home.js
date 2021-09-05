import React from "react";
import { View, Button } from "react-native";
import Padrao from "../estilo/Padrao";

const Home = ({ navigation }) => {
  return (
    <>
    <View style={Padrao.right}>
      <View style={Padrao.botaounico}>
        <Button 
          title="Simples"
          onPress={() => navigation.navigate("Simples")}
        />
      </View>

      <View style={Padrao.botaounico}>
        <Button
          title="Botão"
          onPress={() => navigation.navigate("Botão")}
      />
      </View>

      <View style={Padrao.botaounico}>  
        <Button
          title="Contador"
          onPress={() => navigation.navigate("Contador")}
        />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="ParImpar"
        onPress={() => navigation.navigate("ParImpar")}
      />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="UsuarioLogado"
        onPress={() => navigation.navigate("UsuarioLogado")}
      />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="DigiteSeuNome"
        onPress={() => navigation.navigate("DigiteSeuNome")}
      />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="DimensoesFixas"
        onPress={() => navigation.navigate("DimensoesFixas")}
      />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="Relacao"
        onPress={() => navigation.navigate("Relacao")}
      />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="Lista"
        onPress={() => navigation.navigate("Lista")}
      />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="MegaSena"
        onPress={() => navigation.navigate("MegaSena")}
      />
      </View>

      <View style={Padrao.botaounico}> 
      <Button
        title="CalculoIMC"
        onPress={() => navigation.navigate("CalculoIMC")}
      />
      </View>
     
    
    
    </View>
    </>
  );
};

export default Home;