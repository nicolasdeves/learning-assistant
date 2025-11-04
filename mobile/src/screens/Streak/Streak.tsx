import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Base } from "../Base/Base";

const completed = ["2025-02-01", "2025-02-03", "2025-02-04", "2025-02-07"];

const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function Streak() {
    const [month, setMonth] = useState(2);
    const [year, setYear] = useState(2025);

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
                        const isCompleted = day && completed.includes(format(day));

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
                    <Text style={styles.streakNumber}>4 dias</Text>
                </View>
            </View>
        </Base>
    );
}
