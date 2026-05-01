"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const DownloadButton = () => {
  const { t } = useLanguage();

  const handleDownload = (e) => {
    e.preventDefault();
    window.open("/ismailbouaichi.pdf", "_blank");
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2 hover:bg-[#E6D2C0] hover:text-accent hover:border-[#E6D2C0]"
      onClick={handleDownload}
    >
      <span>{t("home.downloadCV")}</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;
