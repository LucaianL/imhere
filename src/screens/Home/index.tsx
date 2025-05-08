import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home(){
    const participants = [
        'lucaian', 'pedro', 'sacani', 'japa', 'lucas', 'ana', 'isa', 'sacori', 'datebayo', 'socorro'
    ]

    function handleParticipantAdd(){
        if(participants.includes("lucaian")){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
        }
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
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

            <FlatList
                data={participants}
                keyExtractor={item => item} 
                renderItem={({item}) => (
                    <Participant
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém adicionado ao evento.
                    </Text>
                )}
            />
        </View>
    )
}