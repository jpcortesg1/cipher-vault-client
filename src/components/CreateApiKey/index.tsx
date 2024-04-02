"use client";
import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function CreateApiKey() {
  // Ref form
  const formCreate = useRef<HTMLFormElement>(null);

  // State for open and close form
  const [isDown, setIsDown] = useState<boolean>(false);

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

  return (
    <div>
      <button
        className="text-2xl w-full flex justify-between border-2 p-4 rounded-md items-center rounded-b-none text-[#6C63FF]"
        onClick={handleOpenFormCreate}
      >
        Create
        {isDown ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <form
        action=""
        className="h-0 overflow-hidden ease-in-out duration-300 transition-all rounded-md rounded-t-none"
        ref={formCreate}
      >
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="w-full p-2 rounded-md text-gray-950"
          placeholder="cipher-vault@mail.com"
        />

        <label htmlFor="">Description</label>
        <input
          type="text"
          className="w-full p-2 rounded-md text-gray-950"
          placeholder="App security"
        />

        <label htmlFor="">Expire At</label>
        <input
          type="date"
          className="w-full p-2 rounded-md text-gray-950"
          min={today.toISOString().split("T")[0]}
          max={twoMonths.toISOString().split("T")[0]}
          placeholder="App security"
        />
        <button>Create</button>
      </form>
    </div>
  );
}
