"use client";
import Resume from "../elements/resume";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Home() {
  const handleDownload = () => {
    const content = document.getElementById("actualResume");

    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <div>
      <Resume />
      <div className="items-center">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
