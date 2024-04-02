"use client";
import { ChangeEvent, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function CreateApiKey() {
  // Ref form
  const formCreate = useRef<HTMLFormElement>(null);

  // State for open and close form
  const [isDown, setIsDown] = useState<boolean>(false);
  const [body, setBody] = useState({
    email: "",
    description: "",
  });

  // Dates
  let today = new Date();
  today = new Date(today.setDate(today.getDate() + 1));
  let twoMonths = new Date();
  twoMonths = new Date(twoMonths.setMonth(twoMonths.getMonth() + 2));
  twoMonths = new Date(twoMonths.setDate(twoMonths.getDate() - 1));

  // Handle open and close form create
  const handleOpenFormCreate = () => {
    if (!formCreate?.current) return;

    // Values
    const posibbleHeight = formCreate.current.scrollHeight;
    const currentHeightNumber = parseFloat(formCreate.current.style.height);

    // Close form
    if (currentHeightNumber > 0) {
      formCreate.current.classList.remove("p-4");
      formCreate.current.classList.remove("border-2");
      formCreate.current.style.height = "0px";
      setIsDown(() => false);
      return;
    }

    // Open form
    formCreate.current.style.height = posibbleHeight + 32 + "px";
    formCreate.current.classList.add("p-4");
    formCreate.current.classList.add("border-2");
    setIsDown(() => true);
  };

  // On change input
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBody((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // xj90xj-kom5qn-t9lmev-1disg2
  // jpcortesg1@hotmail.com
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await fetch("/api/api-key/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log("🚀 ~ onSubmit ~ data:", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        className="text-xl w-full flex justify-between border-2 p-4 rounded-md items-center rounded-b-none text-[#6C63FF] md:text-2xl"
        onClick={handleOpenFormCreate}
      >
        Create
        {isDown ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <form
        action=""
        className="h-0 overflow-hidden ease-in-out duration-300 transition-all rounded-md rounded-t-none flex flex-col justify-between gap-4"
        ref={formCreate}
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="" className="text-sm md:text-base">
            Email (*)
          </label>
          <input
            type="email"
            className="w-full p-2 rounded-md text-gray-950 text-base md:text-lg"
            placeholder="cipher-vault@mail.com"
            name="email"
            onChange={onChangeInput}
            required
          />
        </div>

        <div>
          <label htmlFor="" className="text-sm md:text-base">
            Description (*)
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md text-gray-950 text-base md:text-lg"
            placeholder="App security"
            name="description"
            onChange={onChangeInput}
            required
          />
        </div>

        <div>
          <label className="text-sm md:text-base">Expire At</label>
          <input
            type="date"
            className="w-full p-2 rounded-md text-gray-950 text-base md:text-lg"
            min={today.toISOString().split("T")[0]}
            max={twoMonths.toISOString().split("T")[0]}
            placeholder="App security"
            name="expireAt"
            onChange={onChangeInput}
          />
        </div>
        <button className="bg-[#6C63FF] mx-auto p-4 py-2 rounded-lg text-base md:text-lg">
          Create
        </button>
      </form>
    </div>
  );
}
