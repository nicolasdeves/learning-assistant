import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

import { MessageResponse } from '../../../interfaces/message';
import { getLoggedUserId } from '../../../auth/authentication';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../interfaces/navbar';
import { getMessagesByCommunity, sendMessage } from '../../../service/message.service';
import { Base } from '../../Base/Base';
import { getCommunityUser } from '../../../service/communityUser.service';

type CommunityRouteProp = RouteProp<RootStackParamList, "CommunityChat">;

export function CommunityChat() {
    const route = useRoute<CommunityRouteProp>();
    const { community } = route.params;

    const [messages, setMessages] = useState<MessageResponse[]>([]);
    const [inputText, setInputText] = useState('');
    const [googleUserId, setGoogleUserId] = useState<string | null>(null);
    const [communityUserId, setCommunityUserId] = useState<number | null>(null);

    const [firstScrollDone, setFirstScrollDone] = useState(false);

    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        fetchUserId();
    }, []);

    useEffect(() => {
        fetchCommunityUserId();
    }, [googleUserId]);


    useEffect(() => {
        if (messages.length > 0 && !firstScrollDone) {
            goToEnd();
        }
    }, [messages]);

    useEffect(() => {
        if (!googleUserId) return;

        loadMessages();

        const interval = setInterval(() => {
            loadMessages();
        }, 2000);

        return () => clearInterval(interval);
    }, [googleUserId]);

    const goToEnd = () => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: false });
            setFirstScrollDone(true);
        }, 100);
    }

    const fetchUserId = async () => {
        const id = await getLoggedUserId();
        id && setGoogleUserId(id);
    };

    const fetchCommunityUserId = async () => {
        console.log('entrou fetchCommunityUserId')
        const communityUser = googleUserId && await getCommunityUser(googleUserId, community.id);
        communityUser && setCommunityUserId(communityUser.id);
        communityUser && console.log(communityUser.id)

    };

    const loadMessages = async () => {
        const messages = await getMessagesByCommunity(community.id);
        messages && setMessages(messages);
    };

    const handleSend = async () => {
        if (inputText.trim() && googleUserId && communityUserId) {
            console.log('enviando mensagem...')
            console.log(communityUserId)
            await sendMessage(communityUserId, inputText);
        }

        setInputText('');
        loadMessages();
        goToEnd();
    };

    const renderMessage = ({ item }: { item: MessageResponse }) => {
        const isMine = item.communityUser.googleUserId.toString() === googleUserId;
        const senderName = isMine ? "Você" : item.communityUser.name || "Serginho";

        return (
            <View style={[styles.msgWrapper, isMine ? { alignItems: "flex-end" } : { alignItems: "flex-start" }]}>
                <Text style={styles.senderName}>{senderName}</Text>

                <View style={[styles.msgContainer, isMine ? styles.meuMsg : styles.outroMsg]}>
                    <Text style={styles.msgText}>{item.content}</Text>
                </View>
            </View>
        );
    };

    return (
        <Base>
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView style={styles.container}>
                    <Text style={styles.title}>{community.name}</Text>

                    <FlatList
                        ref={flatListRef}
                        data={messages}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderMessage}
                        style={styles.messages}

                        contentContainerStyle={{ paddingBottom: 20 }}
                    />

                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua mensagem"
                            value={inputText}
                            onChangeText={setInputText}
                        />

                        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
                            <Text style={styles.sendText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Base>
    );
}

const styles = StyleSheet.create({
    container: { display: 'contents' },
    title: { fontSize: 18, fontWeight: '700', padding: 16, color: '#111' },
    messages: { paddingHorizontal: 12 },

    msgWrapper: {
        marginVertical: 6,
        width: '100%',
    },

    senderName: {
        fontSize: 12,
        color: '#555',
        marginBottom: 2,
        marginHorizontal: 6,
    },

    msgContainer: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 14,
    },
    meuMsg: {
        backgroundColor: '#007AFF',
        alignSelf: 'flex-end'
    },
    outroMsg: {
        backgroundColor: '#3A3D42',
        alignSelf: 'flex-start'
    },
    msgText: {
        fontSize: 15,
        color: '#fff'
    },
    inputArea: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        // marginBottom: 90 SE TIVER QUE TIRAR O PADDING DO BASE!!
    },
    input: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        paddingHorizontal: 14,
        fontSize: 15
    },
    sendBtn: {
        paddingHorizontal: 14,
        justifyContent: 'center',
        marginLeft: 8
    },
    sendText: {
        color: '#007AFF',
        fontWeight: '700'
    }
});
