"use client";
import SectionComponent from "@/app/Components/Section/Section";
import {HeaderComponent} from "@/app/Components/Header/Header";
import FooterComponent from "@/app/Components/Footer/Footer";


import React from "react";
import "./router.css";
import "../app/globals.css";

const CreateInicio: React.FC = () => {
  return (
      <div>
        <HeaderComponent/>
        <SectionComponent/>
        <FooterComponent/>
      </div>
  );
};
export default CreateInicio;