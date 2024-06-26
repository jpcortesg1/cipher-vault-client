import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-base font-semibold mb-2 md:text-lg">Cipher Vault</h3>
          <p className="text-sm md:text-base">Secure Encryption Platform</p>
          <p className="text-sm md:text-base">Medellín, Colombia</p>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-base font-semibold mb-2 md:text-lg">Helpful Links</h3>
          <ul className="list-none">
            <li>
              <a href="https://api-cipher-vault.jpcortesg.online/api-docs/">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/jpcortesg1/cipher-vault">Github</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-base font-semibold mb-2 md:text-lg">Redes sociales</h3>
          <ul className="list-none">
            <li>
              <a href="https://www.linkedin.com/in/juan-pablo-cortes-gonzalez-b5ab591b8/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/jpcortesg1/">Github</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-base font-semibold mb-2 md:text-lg">Contact</h3>
          <p className="text-sm md:text-base">jpcortesg@hotmail.com</p>
          <p className="text-sm md:text-base">(+57) 3128949458</p>
        </div>
      </div>

      <div className="container mx-auto mt-4 text-sm md:text-base text-center">
        <p>
          &copy;{new Date().getFullYear()} Cipher Vault. All rights reserved.
        </p>
        <p>
          Developed with{" "}
          <a href="https://nextjs.org/docs/app" className="text-blue-500">
            Next.js
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
