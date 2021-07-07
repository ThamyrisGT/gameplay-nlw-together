// Aqui terá componentes sendo renderizados por isso tsx
import React from "react";
//import { useNavigation } from "@react-navigation/native";
import { View, Text, Image,Alert,ActivityIndicator } from "react-native";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";

// se usar o export default não pode chamar entre {} na hora de importar. - é melhor para ficar mais organizado e fazdr o autoimport de uma forma mais tranquila
export function SignIn() {
 // const navigation = useNavigation();

  const {loading, signIn } = useAuth();

  async function handleSignIn() {
    //navigation.navigate("Home");
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  // View é um elemento para criar grupos para movimentá-los, etc
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg} // source: para a imagem ser carregada
          style={styles.image}
          resizeMode="stretch" // para garantir que fique ajustada ao que foi definido no tamanho
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}e organize suas jogatinas {`\n`}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {
            loading ? <ActivityIndicator color={theme.colors.primary}/> :
            <ButtonIcon
            title="Entrar com Discord"
            //activeOpacity={0.7}
            onPress={handleSignIn}
          />
          }
        </View>
      </View>
    </Background>
  );
}

// propriedades aspas duplas e aspas simples quando tiver se referindo a texto

// return (
//   // <View style ={{flex: 1, backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>
//   // o mais correto é:
//   <View style={styles.container}>
//     <Text> Hello World ! !</Text>
//     <TextInput
//       style={styles.input}
//       //onChangeText={(value) => setText (value)}  -- mesma coisa que:
//       onChangeText={setText}
//     />
//     <Text>
//       Você Digitou: {text}
//     </Text>
//   </View>
// );
// }
