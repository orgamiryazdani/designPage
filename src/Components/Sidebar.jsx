import "../../src/App.css";

const Sidebar = () => {

    return (
        <aside className="col-span-1 asideBG row-start-1 row-span-4">
            <div className=" flex items-center flex-col h-1/2">
                <div className="text-4xl flex items-center justify-center text-[#A3A3D9] font-bold h-1/4 w-full">
                    <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.761 5.28285L41.2 5.36855L41.9922 6.52001C42.428 7.15313 42.7844 7.72493 42.7844 7.79044C42.7844 7.85595 37.8947 11.1775 31.9186 15.1717L21.0528 22.4337L12.0529 16.407L3.05318 10.3803L1.52646 11.314L0 12.2477L0.165879 14.2102C0.257074 15.2896 0.331759 20.6698 0.331759 26.1664V36.16L2.94469 37.6572C4.38179 38.4805 5.62261 39.1543 5.70201 39.1543C5.78168 39.1543 5.83854 34.6435 5.82858 29.1307C5.81863 23.6179 5.90458 19.1093 6.01936 19.1119C6.13414 19.1143 9.57254 21.3349 13.6606 24.0464L21.0929 28.9761L28.602 23.9761C32.732 21.2262 36.1961 18.9762 36.3001 18.9762C36.4039 18.9762 36.5197 23.5115 36.5574 29.055L36.6261 39.1338L39.1811 37.6509L41.7361 36.1679L41.7374 28.1617C41.7382 23.7581 41.8155 18.9969 41.9094 17.5807L42.0797 15.0063L43.9922 13.716L45.9044 12.4256L46.7317 13.6279C47.1866 14.2894 47.6468 14.7314 47.7539 14.6104C47.9879 14.346 51.6999 5.56509 51.6965 5.2839C51.6942 5.09627 49.3456 5.09575 43.761 5.28285Z" fill="#A3A3D9" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7104 4.15119C9.75441 6.43183 6.47901 8.41479 6.43131 8.55761C6.33802 8.83748 10.6111 11.7882 11.1097 11.7882C11.2754 11.7882 13.5804 10.5461 16.2321 9.02773L21.0536 6.26726L25.8481 9.02773C28.4852 10.5461 30.7815 11.7882 30.9511 11.7882C31.4435 11.7882 35.7317 8.84325 35.64 8.56809C35.5944 8.43104 34.1466 7.4976 32.4228 6.49394C27.4322 3.58856 21.1141 -0.00445076 21.0041 4.13855e-06C20.9485 0.00262467 17.6663 1.87054 13.7104 4.15119ZM8.77459 37.9228L8.84849 40.9969L14.9397 44.4984L21.0306 48L25.8149 45.2589C28.4461 43.7513 31.1885 42.1701 31.9092 41.7448L33.2194 40.9715L33.2933 37.9102C33.3339 36.2265 33.2632 34.8489 33.1361 34.8489C33.009 34.8489 30.2404 36.3887 26.9839 38.2705L21.0628 41.6921L15.1037 38.2705C11.8265 36.3887 9.04503 34.8489 8.92291 34.8489C8.8008 34.8489 8.73398 36.2322 8.77459 37.9228Z" fill="#A3A3D9" fill-opacity="0.56" />
                    </svg>
                    onitait
                </div>
                <div className=" w-full h-3/4 flex justify-around flex-col">

                    <div className="flex cursor-pointer text-[#928EA0] items-center">
                        <div className="flex ml-5 items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" stroke="#928EA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" stroke="#928EA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 13H12" stroke="#928EA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 17H16" stroke="#928EA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="ml-2">Reports</div>
                        </div>
                        <div className="w-full absolute h-10 flex"></div>
                    </div>

                    <div className="flex cursor-pointer text-white items-center">
                        <div className="w-[3px] rounded-r-md  bg-white h-6"></div>
                        <div className="flex ml-4 items-center justify-center">
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.92197 0.875C3.37787 0.875005 2.85449 1.08372 2.4597 1.45814C2.06491 1.83256 1.82878 2.34416 1.79997 2.8875L0.958974 18.7625C0.943699 19.0506 0.98726 19.3388 1.087 19.6096C1.18674 19.8803 1.34058 20.1279 1.53912 20.3373C1.73767 20.5466 1.97677 20.7134 2.24185 20.8273C2.50694 20.9412 2.79244 21 3.08097 21H6.41797C6.7065 21 6.99201 20.9412 7.25709 20.8273C7.52218 20.7134 7.76128 20.5466 7.95982 20.3373C8.15837 20.1279 8.3122 19.8803 8.41195 19.6096C8.51169 19.3388 8.55525 19.0506 8.53997 18.7625L7.69897 2.8875C7.67017 2.34416 7.43404 1.83256 7.03925 1.45814C6.64445 1.08372 6.12108 0.875005 5.57697 0.875H3.92197ZM3.04847 2.9535C3.06038 2.72985 3.15759 2.51927 3.32009 2.36514C3.48259 2.21102 3.698 2.12507 3.92197 2.125H5.57697C6.04197 2.125 6.42597 2.489 6.45047 2.9535L7.29197 18.8285C7.29829 18.9472 7.28036 19.0659 7.23929 19.1774C7.19822 19.2889 7.13486 19.3909 7.05307 19.4771C6.97129 19.5634 6.8728 19.632 6.76361 19.6789C6.65442 19.7259 6.53682 19.75 6.41797 19.75H3.08097C2.96217 19.75 2.84462 19.7257 2.73549 19.6788C2.62636 19.6319 2.52793 19.5632 2.4462 19.477C2.36447 19.3907 2.30116 19.2888 2.26011 19.1773C2.21907 19.0658 2.20116 18.9471 2.20747 18.8285L3.04847 2.9535ZM8.70947 21C9.04008 20.6442 9.28318 20.2162 9.41947 19.75H10.7495V14.625C10.7495 14.142 11.1415 13.75 11.6245 13.75H17.1245C17.608 13.75 17.9995 14.142 17.9995 14.625V19.75H18.3905C18.7532 19.75 19.1013 19.6067 19.3589 19.3512C19.6164 19.0957 19.7626 18.7488 19.7655 18.386L19.8625 6.021L14.4415 11.442C14.3541 11.5294 14.2427 11.589 14.1214 11.6131C14.0002 11.6372 13.8745 11.6248 13.7603 11.5775C13.6461 11.5302 13.5484 11.4501 13.4798 11.3473C13.4111 11.2445 13.3745 11.1236 13.3745 11V6.009L9.09247 10.291L9.00347 8.612L13.5575 4.058C13.6449 3.9704 13.7563 3.9107 13.8776 3.88648C13.999 3.86225 14.1248 3.87459 14.2391 3.92192C14.3534 3.96926 14.4511 4.04946 14.5198 4.15237C14.5885 4.25528 14.6251 4.37627 14.625 4.5V9.491L20.058 4.058C20.1457 3.97026 20.2575 3.91061 20.3792 3.88664C20.501 3.86267 20.6271 3.87547 20.7415 3.9234C20.8559 3.97134 20.9535 4.05225 21.0218 4.15582C21.0901 4.25939 21.126 4.38094 21.125 4.505L21.015 18.395C21.0097 19.0877 20.7308 19.7503 20.2391 20.2382C19.7474 20.7262 19.0827 21 18.39 21H8.70997H8.70947ZM11.9995 19.75H16.7495V15H12V19.75H11.9995Z" fill="white" />
                            </svg>
                            <div className="ml-2">Factory</div>
                        </div>
                        <div className="w-full absolute h-10 flex asideItem">
                        </div>
                    </div>

                    <div className="flex cursor-pointer text-[#928EA0] items-center">
                        <div className="flex ml-5 items-center justify-center">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1667 13.4167C20.2252 13.4167 21.0833 12.5585 21.0833 11.5C21.0833 10.4414 20.2252 9.58333 19.1667 9.58333C18.1081 9.58333 17.25 10.4414 17.25 11.5C17.25 12.5585 18.1081 13.4167 19.1667 13.4167Z" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.1667 5.75001C20.2252 5.75001 21.0833 4.89188 21.0833 3.83334C21.0833 2.77479 20.2252 1.91667 19.1667 1.91667C18.1081 1.91667 17.25 2.77479 17.25 3.83334C17.25 4.89188 18.1081 5.75001 19.1667 5.75001Z" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.1667 21.0833C20.2252 21.0833 21.0833 20.2252 21.0833 19.1667C21.0833 18.1081 20.2252 17.25 19.1667 17.25C18.1081 17.25 17.25 18.1081 17.25 19.1667C17.25 20.2252 18.1081 21.0833 19.1667 21.0833Z" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.83335 13.4167C4.8919 13.4167 5.75002 12.5585 5.75002 11.5C5.75002 10.4414 4.8919 9.58333 3.83335 9.58333C2.77481 9.58333 1.91669 10.4414 1.91669 11.5C1.91669 12.5585 2.77481 13.4167 3.83335 13.4167Z" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.75 11.5H17.25" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.25 3.83333H13.4167C11.5 3.83333 10.5417 4.79166 10.5417 6.70833V16.2917C10.5417 18.2083 11.5 19.1667 13.4167 19.1667H17.25" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="ml-2">Integrations</div>
                        </div>
                        <div className="w-full absolute h-10 flex"></div>
                    </div>

                    <div className="flex cursor-pointer text-[#928EA0] items-center">
                        <div className="flex ml-5 items-center justify-center">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.61585 2.04416L5.04169 3.7675C3.98752 4.16166 3.12585 5.40833 3.12585 6.52666V13.3375C3.12585 14.4192 3.84085 15.84 4.71169 16.4908L8.65335 19.4333C9.94585 20.405 12.0725 20.405 13.365 19.4333L17.3067 16.4908C18.1775 15.84 18.8925 14.4192 18.8925 13.3375V6.52666C18.8925 5.39916 18.0309 4.1525 16.9767 3.75833L12.4025 2.04416C11.6234 1.76 10.3767 1.76 9.61585 2.04416Z" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.29584 10.8808L9.77167 12.3567L13.7133 8.415" stroke="#928EA0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="ml-2">Support</div>
                        </div>
                        <div className="w-full absolute h-10 flex"></div>
                    </div>

                </div>
            </div>
            <div className=" h-1/2 flex  justify-center items-end pb-4">
                <div className="w-44 h-24 flex cursor-pointer flex-col items-center justify-center cartUser rounded-lg">
                    <div className="w-40 flex items-center justify-between h-20">
                        <div className="imageUser rounded-full w-8 h-8"></div>
                        <div className="text-xs text-[#928EA0]">
                            <p>Matthew Perry</p>
                            <p>mathewperry@xyz.com</p>
                        </div>
                    </div>
                    <div className="w-40 flex items-center h-20 text-[#928EA0]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41669 6.30001C7.67502 3.30001 9.21669 2.07501 12.5917 2.07501H12.7C16.425 2.07501 17.9167 3.56668 17.9167 7.29168V12.725C17.9167 16.45 16.425 17.9417 12.7 17.9417H12.5917C9.24169 17.9417 7.70002 16.7333 7.42502 13.7833" stroke="#928EA0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.5 10H3.01666" stroke="#928EA0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.87498 7.20834L2.08331 10L4.87498 12.7917" stroke="#928EA0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="ml-2">Logout</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;