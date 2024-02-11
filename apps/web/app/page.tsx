"use client";

import { PopButton } from "@jobbi/ui/src/components";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <PopButton onPress={() => console.log("Pressed!")} title="Boop" />
    </div>
  );
}
