import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../components/ui/ScreenHeaderBtn/ScreenHeaderBtn";
import { COLORS, SIZES, FONT } from "../../../constants/theme";
import icons from "../../../constants/images";

import styles from "../../../components/contact/Contact.style";

export default function index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          title: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              dimension="60%"
              handlePress={() => router.push("/library/")}
              iconUrl={icons.left}
            />
          ),
        }}
      />

      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Номер телефону:</Text>
        <Text style={styles.text}>+380963629939</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Розробник програми:</Text>
        <Text style={styles.text}>Назар Ільків</Text>
      </View>
      <View style={styles.contactFormContainer}>
        <Text style={styles.questionText}>
          Якщо Ви маєте питання, напишіть його?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Напишіть своє питання тут"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Надіслати</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}