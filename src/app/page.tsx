"use client";
import "./globals.css";
import React from "react";
import {HeaderComponent} from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";
import 'leaflet/dist/leaflet.css';
import SectionComponent from "./Components/Section/Section";
import { Layout } from "lucide-react";


export default function Home() {
  return (
    <div>
      <Layout>
        <HeaderComponent/>
            <link href="/inicio"/>
            <link href="/dashboard"/>
            <link href="/relatorios"/>
            <link href="/gestaoUsuarios" />
            <link href="/analiseDesempenho"/>
            <link href="/configuracoes"/>
            <link href="/feedbackClientes"/>
        <SectionComponent/>
        <FooterComponent/>
      </Layout>
    </div>
  );
}
