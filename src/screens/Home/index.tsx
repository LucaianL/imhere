import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home(){

    function handleParticipantAdd(){
        console.log("O botão foi clicado")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Amanhã</Text>

            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Seu nome"
                placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant/>
            <Participant/>

        </View>
    )
}