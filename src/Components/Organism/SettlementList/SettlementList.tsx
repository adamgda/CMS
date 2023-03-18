import React from "react";
// import ProgressList from "../../Atoms/ProgressList/ProgressList";
// import SettlementFooter from "./Components/SettlementFooter/SettlementFooter";
import SettlementAdd from "./Components/SettlementAdd/SettlementAdd";
import Section from "../../Atoms/Section/Section";
// import CreditCardOffTwoToneIcon from "@mui/icons-material/CreditCardOffTwoTone";
import HandymanTwoToneIcon from "@mui/icons-material/HandymanTwoTone";

// const MOCK = [
//   { id: "0", label: "Projekt 1", sum: "2000" },
//   { id: "1", label: "Projekt 2", sum: "3000" },
//   { id: "2", label: "Projekt 3", sum: "1300" },
//   { id: "3", label: "Projekt 4", sum: "7000" },
// ];

const SettlementList = () => {
  // const settlementUpdate = () => {
  //   console.log("update");
  // };

  // const settlementSum = (): string => {
  //   let sum = 0;
  //   MOCK.forEach((el) => {
  //     sum = sum + parseInt(el.sum);
  //   });
  //   return sum.toString();
  // };

  return (
    <Section title="Rozliczenia" titleComponent={<SettlementAdd />}>
      {/*MOCK.length > 0 ? (
        <>
          <ProgressList list={MOCK} editCallback={settlementUpdate} removable />
          <SettlementFooter sum={settlementSum()} />
        </>
      ) : (
        <CreditCardOffTwoToneIcon fontSize="large" />
      )*/}
      <HandymanTwoToneIcon fontSize="large" />
    </Section>
  );
};

export default SettlementList;
