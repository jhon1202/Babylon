import React from "react";

function BottomFooter() {
  return (
    <>
      <section className=" pt-16 pb-12 bg-gray-800">
        <div className="max-w-[84rem] mx-auto px-8">
          <div className="flex w-full gap-x-8">
            <div className="w-80">
              <div className="mb-8">
                <svg
                  width="79"
                  height="32"
                  viewBox="0 0 79 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.53824 30.955C5.35046 31.2716 6.21342 31.4299 7.12716 31.4299C8.02058 31.4299 8.89373 31.232 9.74655 30.8362C10.5994 30.4405 11.3608 29.8865 12.0309 29.1741C12.7213 28.442 13.2695 27.5714 13.6756 26.5622C14.0817 25.5531 14.2848 24.4351 14.2848 23.2083C14.2848 21.5263 13.9599 20.1017 13.3101 18.9342C12.6604 17.747 11.7974 16.8467 10.7212 16.2333C9.66531 15.6001 8.52823 15.2835 7.30991 15.2835C6.23375 15.2835 5.29969 15.5011 4.50778 15.9365C3.73618 16.352 3.14733 16.7873 2.74122 17.2424V9.10986H0V31.0737H2.55847V29.7974C3.08641 30.2328 3.74633 30.6186 4.53824 30.955ZM9.01556 28.3431C8.26425 28.8179 7.39115 29.0554 6.39617 29.0554C5.6855 29.0554 5.01543 28.9466 4.38595 28.7289C3.75648 28.5113 3.20824 28.2243 2.74122 27.8682V19.6169C3.10671 19.1222 3.63465 18.6671 4.32503 18.2516C5.0357 17.8162 5.82761 17.5986 6.70075 17.5986C7.5739 17.5986 8.3658 17.8262 9.07647 18.2812C9.80746 18.7363 10.3862 19.3893 10.8126 20.2402C11.2593 21.091 11.4827 22.1101 11.4827 23.2973C11.4827 24.445 11.2593 25.4541 10.8126 26.3248C10.3862 27.1954 9.78714 27.8682 9.01556 28.3431ZM20.3688 30.9253C21.1201 31.2617 21.9627 31.4299 22.8968 31.4299C23.5465 31.4299 24.1354 31.3705 24.6633 31.2518C25.2116 31.1331 25.6684 30.9945 26.0339 30.8362L25.3639 28.6695C25.0999 28.7883 24.775 28.8971 24.3892 28.996C24.0237 29.0752 23.6481 29.1148 23.2623 29.1148C22.45 29.1148 21.8104 28.8575 21.3434 28.3431C20.8967 27.8286 20.6733 27.0371 20.6733 25.9686V9.10986H17.9321V26.2357C17.9321 27.4625 18.1453 28.4618 18.5717 29.2335C19.0185 30.0052 19.6175 30.5691 20.3688 30.9253ZM28.6138 15.6397V31.0737H31.355V15.6397H28.6138ZM38.1472 29.9755C39.0406 30.9451 40.2488 31.4299 41.7717 31.4299C42.523 31.4299 43.2438 31.3111 43.9342 31.0737C44.6246 30.856 45.1728 30.6285 45.5789 30.391L44.8175 28.254C44.4316 28.4717 44.0052 28.6597 43.5382 28.8179C43.0915 28.9762 42.6144 29.0554 42.1067 29.0554C41.4163 29.0554 40.8173 28.8278 40.3097 28.3727C39.8224 27.9176 39.5787 27.1163 39.5787 25.9686V18.5187H43.9646V16.2036H39.5787V11.3359H37.4771L36.8984 16.2036H34.0963V18.5187H36.8375V25.7608C36.8375 27.5812 37.274 28.9862 38.1472 29.9755ZM49.0349 30.8362C49.4409 31.232 49.9182 31.4299 50.4665 31.4299C51.0552 31.4299 51.5425 31.2518 51.9284 30.8956C52.3139 30.5196 52.5072 30.0349 52.5072 29.4412C52.5072 28.907 52.2935 28.442 51.8675 28.0462C51.4611 27.6505 50.9942 27.4526 50.4665 27.4526C49.8368 27.4526 49.339 27.6307 48.974 27.9869C48.6085 28.3431 48.4258 28.8278 48.4258 29.4412C48.4258 29.9755 48.6285 30.4405 49.0349 30.8362ZM59.1594 30.4504C60.2354 31.1034 61.4337 31.4299 62.7534 31.4299C63.9922 31.4299 65.0073 31.1726 65.7992 30.6582C66.6116 30.1239 67.2512 29.5402 67.718 28.907C68.124 30.4504 69.3019 31.2221 71.2512 31.2221L71.8299 29.1444C71.383 29.1444 70.9671 29.0356 70.5811 28.8179C70.2156 28.5805 70.0329 28.0858 70.0329 27.3339V15.6397H67.5353V16.8862C66.9871 16.4312 66.3374 16.0552 65.586 15.7584C64.855 15.4418 64.0326 15.2835 63.1189 15.2835C61.6569 15.2835 60.3572 15.6495 59.2203 16.3817C58.1033 17.094 57.22 18.0636 56.5704 19.2904C55.9408 20.5172 55.6262 21.9023 55.6262 23.4457C55.6262 25.0683 55.9408 26.483 56.5704 27.6901C57.22 28.8773 58.0833 29.7974 59.1594 30.4504ZM65.5555 28.5211C64.865 28.8773 64.134 29.0554 63.3626 29.0554C62.4284 29.0554 61.586 28.8179 60.8345 28.3431C60.0831 27.8484 59.4944 27.1756 59.068 26.3248C58.6416 25.4541 58.4284 24.4647 58.4284 23.3567C58.4284 22.209 58.6416 21.2098 59.068 20.3589C59.4944 19.4883 60.0731 18.8155 60.8041 18.3406C61.5555 17.8459 62.4184 17.5986 63.393 17.5986C64.124 17.5986 64.8146 17.7173 65.4642 17.9548C66.1342 18.1724 66.7434 18.4692 67.2916 18.8452V27.1261C66.8248 27.6802 66.2461 28.1452 65.5555 28.5211ZM75.4905 12.4341C75.8765 12.8101 76.3334 12.9981 76.8612 12.9981C77.4498 12.9981 77.9172 12.8298 78.2622 12.4935C78.6072 12.1373 78.78 11.6822 78.78 11.1282C78.78 10.6137 78.5873 10.1784 78.2013 9.8222C77.8358 9.44623 77.3889 9.25827 76.8612 9.25827C76.2725 9.25827 75.8051 9.42647 75.4601 9.76284C75.1151 10.0992 74.9423 10.5543 74.9423 11.1282C74.9423 11.6229 75.125 12.0581 75.4905 12.4341ZM75.4905 15.6397V31.0737H78.2318V15.6397H75.4905Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.9131 1.28893C27.737 -0.429714 32.2142 -0.429834 36.0386 1.28971L34.4341 3.15388C31.5864 2.03932 28.3654 2.03926 25.5177 3.15329L23.9131 1.28893ZM22.6197 1.95128C21.8295 2.40826 21.077 2.94549 20.3751 3.56297C20.1721 3.74158 20.1681 4.044 20.3644 4.22929L21.4082 5.21428C21.5954 5.39113 21.8966 5.39489 22.0911 5.22528C22.7426 4.65757 23.4461 4.17299 24.1863 3.77155L22.6197 1.95128ZM35.7654 3.77232L37.3319 1.95223C38.1214 2.40898 38.8734 2.94589 39.5748 3.56297C39.7778 3.74158 39.7818 4.044 39.5858 4.22929L38.542 5.21428C38.3548 5.39085 38.0536 5.39489 37.8591 5.22528C37.208 4.65794 36.5051 4.1736 35.7654 3.77232ZM28.024 11.1343C28.024 10.1093 28.8973 9.27857 29.975 9.27857C31.0526 9.27857 31.926 10.1093 31.926 11.1343C31.926 12.1593 31.0526 12.99 29.975 12.99C28.8973 12.99 28.024 12.1593 28.024 11.1343ZM30.6887 4.66508C32.6567 4.80691 34.586 5.53653 36.1532 6.85483C36.3632 7.0314 36.3702 7.33875 36.1703 7.52608L35.1204 8.51165C34.9375 8.68359 34.643 8.69491 34.4482 8.53485C33.3615 7.64114 32.0426 7.12701 30.6887 6.99354V4.66508ZM29.2612 4.66508C27.2924 4.80709 25.3629 5.53732 23.7967 6.85483C23.5863 7.03172 23.5796 7.33875 23.7793 7.52608L24.8292 8.51165C25.0121 8.68331 25.3066 8.69491 25.5014 8.53485C26.5896 7.64012 27.9084 7.12664 29.2612 6.99345V4.66508Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className=" text-md text-gray-200 max-w-[216px]">
                Design. Simulate. Prototype. Built for RF industry leaders.
              </p>
            </div>
            <div className="flex gap-x-24">
              <div className="">
                <h6 className="text-sm font-semibold text-gray-300 mb-4">
                  Product
                </h6>
                <ul className=" space-y-3">
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Workflow
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Metrics
                      <span className="bg-[#ffffff1a] border border-[#ffffff4d] rounded-2xl py-0.5 px-2 ml-2 font-semibold text-xs">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="text-sm font-semibold text-gray-300 mb-4">
                  Company
                </h6>
                <ul className=" space-y-3">
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="text-sm font-semibold text-gray-300 mb-4">
                  Resources
                </h6>
                <ul className=" space-y-3">
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="text-sm font-semibold text-gray-300 mb-4">
                  Legal
                </h6>
                <ul className=" space-y-3">
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#abc"
                      className=" text-md font-semibold text-gray-200"
                    >
                      Licenses
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-900">
        <div className="max-w-[84rem] mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="text-md text-gray-300">
              © {new Date().getFullYear()} blit.ai - All rights reserved.
            </div>

            <div className="flex items-center gap-x-6">
              <div className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                    fill="#98A2B3"
                  />
                </svg>
              </div>

              <div className="cursor-pointer">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.55016 19.7502C16.6045 19.7502 21.5583 12.2469 21.5583 5.74211C21.5583 5.53117 21.5536 5.31554 21.5442 5.1046C22.5079 4.40771 23.3395 3.5445 24 2.55554C23.1025 2.95484 22.1496 3.21563 21.1739 3.32898C22.2013 2.71315 22.9705 1.74572 23.3391 0.606011C22.3726 1.1788 21.3156 1.58286 20.2134 1.80085C19.4708 1.01181 18.489 0.48936 17.4197 0.314295C16.3504 0.13923 15.2532 0.321295 14.2977 0.832341C13.3423 1.34339 12.5818 2.15495 12.1338 3.14156C11.6859 4.12816 11.5754 5.23486 11.8195 6.29054C9.86249 6.19233 7.94794 5.68395 6.19998 4.79834C4.45203 3.91274 2.90969 2.66968 1.67297 1.14976C1.0444 2.23349 0.852057 3.51589 1.13503 4.73634C1.418 5.95678 2.15506 7.02369 3.19641 7.72023C2.41463 7.69541 1.64998 7.48492 0.965625 7.10617V7.1671C0.964925 8.30439 1.3581 9.40683 2.07831 10.287C2.79852 11.1672 3.80132 11.7708 4.91625 11.9952C4.19206 12.1934 3.43198 12.2222 2.69484 12.0796C3.00945 13.0577 3.62157 13.9131 4.44577 14.5266C5.26997 15.14 6.26512 15.4808 7.29234 15.5015C5.54842 16.8714 3.39417 17.6144 1.17656 17.6109C0.783287 17.6103 0.390399 17.5861 0 17.5387C2.25286 18.984 4.87353 19.7516 7.55016 19.7502Z"
                    fill="#98A2B3"
                  />
                </svg>
              </div>

              <div className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
                    fill="#98A2B3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BottomFooter;