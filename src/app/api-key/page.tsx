import CreateApiKey from "@/components/CreateApiKey";

export default function ApiKey() {  

  return (
    <div>
      <h1 className="text-4xl text-center text-[#6C63FF]">
        Management of <span className="font-bold">API Key</span>
      </h1>

      <div className="action flex flex-col gap-8 mt-12 relative">
        <CreateApiKey />
        <CreateApiKey />
        <CreateApiKey />
      </div>
    </div>
  );
}
