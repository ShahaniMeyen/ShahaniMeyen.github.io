import portfolioHtml from "../portfolio.html?raw";

export default function Home() {
  return (
    <iframe
      title="Shahani Meyen | Personal Portfolio"
      srcDoc={portfolioHtml}
      loading="eager"
      className="w-screen h-screen border-0 block"
    />
  );
}
