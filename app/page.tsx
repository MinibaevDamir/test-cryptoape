"use client";

import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import CryptoChart, { ChartDataPoint } from "../components/CryptoChart";

const solanaData: ChartDataPoint[] = [
  { name: "Sep 22", value: 140 },
  { name: "Sep 29", value: 145 },
  { name: "October 3", value: 139 },
  { name: "October 10", value: 152 },
  { name: "October 17", value: 160 },
  { name: "October 24", value: 155 },
  { name: "November 1", value: 165 },
];

const bitcoinData: ChartDataPoint[] = [
  { name: "Sep 22", value: 65000 },
  { name: "Sep 29", value: 65500 },
  { name: "October 3", value: 64900 },
  { name: "October 10", value: 66000 },
  { name: "October 17", value: 67200 },
  { name: "October 24", value: 67000 },
  { name: "November 1", value: 68100 },
];

const containerStyles: React.CSSProperties = {
  padding: "24px",
  borderRadius: "12px",
  backgroundColor: "#fff",
  border: "1px solid #e0e0e0",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
};

const topWrapperStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 0",
};

const valueStyles: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "500",
  color: "#ehe",
};

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "'Geist', sans-serif" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingBottom: "48px",
        }}
      >
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <div style={{ color: "#c8c8c8c", fontSize: "20px" }}>
          Track Bitcoin and Solana prices in real-time
        </div>
      </div>
      <div
        className="chartContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div style={containerStyles}>
          <div style={topWrapperStyles}>
            <h2 style={{ margin: "0" }}>Solana (SOL)</h2>
            <div style={valueStyles}>{solanaData.at(-1).value} USDT</div>
          </div>
          <CryptoChart
            data={solanaData}
            lineLabel="Solana Rate (USDT)"
            lineColor="#9945FF"
          />
        </div>

        <div style={containerStyles}>
          <div style={topWrapperStyles}>
            <h2 style={{ margin: "0" }}>Bitcoin (BTC)</h2>
            <div style={valueStyles}>{bitcoinData.at(-1).value} USDT</div>
          </div>
          <CryptoChart
            data={bitcoinData}
            lineLabel="Bitcoin Rate (USDT)"
            lineColor="#F7931A"
          />
        </div>
      </div>
    </main>
  );
}
