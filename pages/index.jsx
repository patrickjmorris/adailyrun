import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
    </Head>

    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784">
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784">
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <img className="h-8 w-auto sm:h-10" src="/md-star.svg" alt="" />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                Product
              </a>
              <a
                href="#"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                Features
              </a>
              <a
                href="#"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                Marketplace
              </a>
              <a
                href="#"
                className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                Company
              </a>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
                  Log in
                </a>
              </span>
            </div>
          </nav>
        </div>
        {/* Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95" */}
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/md-sparkles.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                  Product
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                  Features
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                  Marketplace
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                  Company
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Data to enrich your
              <br className="xl:hidden" />
              <span className="text-indigo-600">online business</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
              sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* // Features section */}
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784">
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A better way to send money.
            </h3>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">Competitive rates</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab
                  doloremque.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">No hidden fees</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at
                  distinctio ratione.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">Instant transfers</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi
                  velit doloribus mollitia.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">Reminder emails</h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit?
                  Quisquam unde accusantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* // Blog */}
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus
            sed.
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Boost your conversion rate
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium
                    praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      Roel Aufderhar
                    </a>
                  </p>
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                    <span className="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    Video
                  </a>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    How to use search engine optimization to drive sales
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro
                    quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      Brenna Goyette
                    </a>
                  </p>
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                    <span className="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    {' '}
                    Case Study
                  </a>
                </p>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Improve your customer experience
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo
                    recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      Daniela Metz
                    </a>
                  </p>
                  <div className="flex text-sm leading-5 text-gray-500">
                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                    <span className="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Marketing
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Analytics
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Commerce
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Guides
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      About
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Jobs
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Press
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Claim
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Subscribe to our newsletter
            </h4>
            <p className="mt-4 text-gray-300 text-base leading-6">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <input
                aria-label="Email address"
                type="email"
                required
                className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">Dribbble</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Home