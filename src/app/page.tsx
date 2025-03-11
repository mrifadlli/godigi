import React from "react";
import DefaultLayout from "@/components/DefaultLayout";
import Swide from "@/components/Swide";
import { GetTicket } from "@/components/GetTicket";
import Sponsorship from "@/components/Sponsorship"

import { Countdown } from "@/components/Countdown";
import { ArtistLineup } from "@/components/ArtistLineup";
import { PasarRakyat } from "@/components/PasarRakyat";
import { Hero } from "@/components/Hero";
import { HappyRun } from "@/components/HappyRun";

export default function page() {
  return (
    <DefaultLayout>
      <>
        <Hero />
        <Countdown targetDate={"2025-05-20T00:00:00"} />
        <Swide />
        <HappyRun />
        <ArtistLineup />
        <PasarRakyat />
        <GetTicket />
        <Sponsorship />
      </>
    </DefaultLayout>
  );
}
