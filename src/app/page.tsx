import CardInfo from "@/components/CardInfo";

export default function Home() {
  const cards = [
    {
      title: "What is Cipher Vault?",
      description: `Cipher Vault is an advanced encryption API designed to provide a
      secure and reliable solution for protecting confidential data. Built
      upon cutting-edge encryption algorithms and industry best practices,
      Cipher Vault ensures that your information remains private and
      inaccessible to unauthorized parties.`,
      img: "/images/security1.svg",
    },
    {
      title: "Why Cipher Vault?",
      description: `In a world where data breaches and cyber threats are rampant, Cipher Vault stands out as a beacon of security. We believe in empowering individuals and businesses with the tools they need to protect their most valuable asset – their data. Our API offers a comprehensive suite of encryption features, including message encryption, API key management, and self-destruct timers, to ensure that your information remains secure at all times.`,
      img: "/images/security2.svg",
      reverse: true,
    },
    {
      title: "How does Cipher Vault work?",
      description: `Utilizing state-of-the-art encryption techniques such as AES encryption and unique password generation, Cipher Vault encrypts and decrypts data seamlessly, providing an added layer of security to your digital communications and storage. Our API is designed to be user-friendly and developer-friendly, allowing for seamless integration into your existing applications and workflows.`,
      img: "/images/security3.svg",
    },
    {
      title: "Why Choose Cipher Vault?",
      description: (
        <p>
          <span className="font-bold">Robust Security:</span> With Cipher Vault,
          you can rest assured that your data is protected by military-grade
          encryption protocols, keeping it safe from prying eyes and
          unauthorized access.
          <br />
          <br />
          <span className="font-bold">Reliability:</span> Our API is built to
          deliver consistent performance and reliability, ensuring that your
          data remains accessible whenever you need it.
          <br />
          <br />
          <span className="font-bold">Ease of Use:</span>
          Cipher Vault offers a simple yet powerful API interface that makes
          encryption and decryption tasks a breeze for developers and end-users
          alike.
          <br />
          <br />
          <span className="font-bold">Compliance:</span>
          We adhere to stringent security standards and compliance regulations,
          providing you with peace of mind knowing that your data is handled
          with the utmost care and compliance.
          <br />
          <br />
          Choose Cipher Vault API for unparalleled security, reliability, and
          peace of mind. Protect your data with confidence – choose Cipher Vault
          today.
        </p>
      ),
      img: "/images/security4.svg",
      reverse: true,
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-12">
      <h1 className="text-4xl text-center text-[#6C63FF]">
        Cipher <span className="font-bold">Vault:</span> Secure Your{" "}
        <span className="font-bold">Data</span> with{" "}
        <span className="font-bold">Confidence</span>
      </h1>
      <p className="text-xl">
        At Cipher Vault, we understand the paramount importance of safeguarding
        sensitive information in today&#39;s digital age. Our Cipher Vault API
        is meticulously crafted to offer a robust encryption platform that
        empowers users to protect their data with confidence.
      </p>

      {cards.map((card) => (
        <CardInfo key={card.title} {...card} />
      ))}
    </div>
  );
}
