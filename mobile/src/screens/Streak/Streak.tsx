import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Base } from "../Base/Base";
import { getActivityUserByUser } from "../../service/activityUser.service";
import { getLoggedUserId } from "../../auth/authentication";

// const completed = ["2025-02-03", "2025-02-04", "2025-02-07"];

const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function Streak() {
    const now = new Date();
    const [month, setMonth] = useState(now.getMonth() + 1);;
    const [year, setYear] = useState(now.getFullYear());;
    const [activitiesDoneDate, setActivitiesDoneDate] = useState<string[]>([])
    const [googleUserId, setGoogleUserId] = useState<string | null>(null)

    function changeMonth(direction: number) {
        let newMonth = month + direction;
        let newYear = year;

        if (newMonth < 1) {
            newMonth = 12;
            newYear--;
        }
        if (newMonth > 12) {
            newMonth = 1;
            newYear++;
        }

        setMonth(newMonth);
        setYear(newYear);
    }

    function generateDays(y: number, m: number) {
        const daysInMonth = new Date(y, m, 0).getDate();
        const firstDay = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();

        const slots = Array(firstDay).fill(null);
        for (let d = 1; d <= daysInMonth; d++) slots.push(d);
        return slots;
    }

    const days = generateDays(year, month);

    function format(day: number) {
        return `${year}-${month.toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`;
    }

    useEffect(() => {
        fetchUser();
    }, [])

    useEffect(() => {
        if (googleUserId) {
            fetchActivities(googleUserId)
        }
    }, [googleUserId])

    const fetchActivities = async (googleUserId: string) => {
        const activitiesUser = await getActivityUserByUser(googleUserId);

        if (activitiesUser) {
            console.log(activitiesUser)
            const activitiesDoneDate = activitiesUser.map(activity => activity.createdAt.split('T')[0]);
            console.log(activitiesDoneDate)

            console.log()
            setActivitiesDoneDate(activitiesDoneDate);
        }
    }

    const fetchUser = async () => {
        const userId = await getLoggedUserId();
        userId && setGoogleUserId(userId);
    }

    // filtra só as datas do mês/ano atual
    const activitiesThisMonth = activitiesDoneDate.filter(date => {
        const d = new Date(date);
        return d.getFullYear() === year && (d.getMonth() + 1) === month;
    });

    // transforma em um Set pra pegar só dias únicos
    const uniqueDaysThisMonth = new Set(activitiesThisMonth);

    // quantidade de dias com pelo menos uma atividade
    const frequency = uniqueDaysThisMonth.size;



    return (
        <Base>
            <View style={styles.container}>
                <Text style={styles.title}>Ritmo de Estudos</Text>
                <Text style={styles.subtitle}>Cada dia estudado = XP + memória turbinada </Text>

                {/* Header Mês */}
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20, marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => changeMonth(-1)}>
                        <Text style={{ fontSize: 22 }}>‹</Text>
                    </TouchableOpacity>

                    <Text style={styles.month}>
                        {monthNames[month - 1]} {year}
                    </Text>

                    <TouchableOpacity onPress={() => changeMonth(1)}>
                        <Text style={{ fontSize: 22 }}>›</Text>
                    </TouchableOpacity>
                </View>

                {/* Semana */}
                <View style={styles.weekRow}>
                    {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((d, i) => (
                        <Text key={`${d}-${i}`} style={styles.weekLabel}>{d}</Text>
                    ))}
                </View>

                {/* Dias */}
                <View style={styles.grid}>
                    {days.map((day, i) => {
                        const isCompleted = day && activitiesDoneDate.includes(format(day));

                        return (
                            <TouchableOpacity
                                key={i}
                                style={[
                                    styles.dayBox,
                                    isCompleted && styles.completedDay
                                ]}
                            >
                                <Text style={[
                                    styles.dayText,
                                    isCompleted && { color: "#fff" }
                                ]}>
                                    {day ?? ""}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={styles.streakBox}>
                    <Text style={styles.streakLabel}>Frequência mensal</Text>
                    <Text style={styles.streakNumber}>{frequency}</Text>
                </View>
            </View>
        </Base>
    );
}
