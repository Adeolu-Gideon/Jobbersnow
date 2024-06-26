const Footer = () => {
  return (
    <>
      <footer className="bg-secondary">
        <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div className="max-w-sm">
            <div className="mb-6 flex h-12 items-center space-x-2">
              <span className="text-2xl font-bold">
                Bel<span className="text-blue-600">Air</span>.
              </span>
            </div>
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad
              a officia ea expedita!
            </div>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
            <nav aria-label="Footer Navigation" className="text-gray-500">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Support Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Support</div>
            <nav aria-label="Footer Navigation" className="text-gray-500">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Support Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-medium xl:mb-4">
              Subscribe to our Newsletter
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <input
                  type="email"
                  className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                />
                <button className="block rounded-xl bg-primary px-6 py-3 font-medium text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary">
          <div className="text-center mx-auto gap-y-4 px-4 py-3 text-gray-500">
            © 2022 BelAir | All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer