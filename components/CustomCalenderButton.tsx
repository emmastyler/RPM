import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import CalenderIcon from "../assets/svg/calenderIcon.svg";
import { Pressable } from "react-native";

export default () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <CalenderIcon />
      </Pressable>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
