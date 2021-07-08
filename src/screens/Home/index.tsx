import React, { useState,useCallback } from "react";  //useCallback é usado para guardar a referência da funçao em memória
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import {Load} from "../../components/Load";

import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();
  const [appointments,setAppointments]=useState <AppointmentProps[]>([]);
  const[loading,setLoading] = useState(true);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails" ,{guildSelected});    // ou {guildSelected:guildSelected}, por ser o msm nome pode passar só um
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage:AppointmentProps[]= response ? JSON.parse(response) :[];

    if(category){
      setAppointments(storage.filter(item => item.category===category));
    }else{
      setAppointments(storage);
    }
    setLoading(false);
  }

  // quando voltar para tela, ela será recarregada
  useFocusEffect(useCallback (() =>{
    loadAppointments();
    
  },[category]));   // toda vez que selecionar uma nova categoria, irá recarregar a página
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {
        loading ? <Load/> :
        <>
        <ListHeader title="Partidas agendadas" subtitle={`Total: ${appointments.length}`} />
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointment data={item} onPress={() =>handleAppointmentDetails(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{paddingBottom:69}}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
      </>
      }
    </Background>
  );
}

//OBS: a ScrowView é utilizada para quando voce tem poucos elementos para serem listados, pois ela coloca todos os elementos em tela de uma vez
// já a flatList ela é mais para informatica,e indicada quando tem muitos elementos em uma lista. Diferente da scrowview, ela não renderiza tudo de uma vez, ela renderiza
//aos poucos e dá preferência aos elementos que estão visíveis em tela, no foco da scroll
