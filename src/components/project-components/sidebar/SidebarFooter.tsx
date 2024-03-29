import React, { useState } from "react";
import SimulationProperties from "./SimulationProperties";
import { Auth, Storage } from "aws-amplify";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "state/hooks";
import {
  selectEmail,
  selectUserPlan,
  selectUsername,
} from "state/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import {
  selectProjectInfo,
  setProjectInfo,
} from "state/reducers/projectInfoSlice";
import { Tooltip } from "react-tooltip";

interface SidebarFooterProps {
  projectId: string;
}

function SidebarFooter({ projectId }: SidebarFooterProps) {
  const [simulationPropertiesVisible, setSimulationPropertiesVisible] =
    useState(false);
  // const [status, setStatus] = useState({ status: "", percentage: 0 }); // Add status state and set initial value to "Loading..."
  const navigate = useNavigate();
  const username = useAppSelector(selectUsername);
  const email = useAppSelector(selectEmail);
  const userPlan = useAppSelector(selectUserPlan);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const projectInfo = useAppSelector(selectProjectInfo).info;

  useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      const data = projectInfo;
      return data;
    },
    onSuccess: (data) => {
      dispatch(setProjectInfo(data));
    },
    onError: (err) => {
      console.log(err);
    },
    refetchInterval: 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <footer className="pt-4 px-3 bg-transparent">
      <a
        className="flex items-center p-2 text-sm font-normal hover:bg-gray-50 active:bg-gray-100 justify-between rounded-md cursor-pointer"
        onClick={(e) => {
          setSimulationPropertiesVisible(true);
        }}
      >
        <svg
          className="w-5 h-5 ml-2"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
            stroke="#667085"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.7273 13.7273C17.6063 14.0015 17.5702 14.3056 17.6236 14.6005C17.6771 14.8954 17.8177 15.1676 18.0273 15.3818L18.0818 15.4364C18.2509 15.6052 18.385 15.8057 18.4765 16.0265C18.568 16.2472 18.6151 16.4838 18.6151 16.7227C18.6151 16.9617 18.568 17.1983 18.4765 17.419C18.385 17.6397 18.2509 17.8402 18.0818 18.0091C17.913 18.1781 17.7124 18.3122 17.4917 18.4037C17.271 18.4952 17.0344 18.5423 16.7955 18.5423C16.5565 18.5423 16.3199 18.4952 16.0992 18.4037C15.8785 18.3122 15.678 18.1781 15.5091 18.0091L15.4545 17.9545C15.2403 17.745 14.9682 17.6044 14.6733 17.5509C14.3784 17.4974 14.0742 17.5335 13.8 17.6545C13.5311 17.7698 13.3018 17.9611 13.1403 18.205C12.9788 18.4489 12.8921 18.7347 12.8909 19.0273V19.1818C12.8909 19.664 12.6994 20.1265 12.3584 20.4675C12.0174 20.8084 11.5549 21 11.0727 21C10.5905 21 10.1281 20.8084 9.78708 20.4675C9.4461 20.1265 9.25455 19.664 9.25455 19.1818V19.1C9.24751 18.7991 9.15011 18.5073 8.97501 18.2625C8.79991 18.0176 8.55521 17.8312 8.27273 17.7273C7.99853 17.6063 7.69437 17.5702 7.39947 17.6236C7.10456 17.6771 6.83244 17.8177 6.61818 18.0273L6.56364 18.0818C6.39478 18.2509 6.19425 18.385 5.97353 18.4765C5.7528 18.568 5.51621 18.6151 5.27727 18.6151C5.03834 18.6151 4.80174 18.568 4.58102 18.4765C4.36029 18.385 4.15977 18.2509 3.99091 18.0818C3.82186 17.913 3.68775 17.7124 3.59626 17.4917C3.50476 17.271 3.45766 17.0344 3.45766 16.7955C3.45766 16.5565 3.50476 16.3199 3.59626 16.0992C3.68775 15.8785 3.82186 15.678 3.99091 15.5091L4.04545 15.4545C4.25503 15.2403 4.39562 14.9682 4.4491 14.6733C4.50257 14.3784 4.46647 14.0742 4.34545 13.8C4.23022 13.5311 4.03887 13.3018 3.79497 13.1403C3.55107 12.9788 3.26526 12.8921 2.97273 12.8909H2.81818C2.33597 12.8909 1.87351 12.6994 1.53253 12.3584C1.19156 12.0174 1 11.5549 1 11.0727C1 10.5905 1.19156 10.1281 1.53253 9.78708C1.87351 9.4461 2.33597 9.25455 2.81818 9.25455H2.9C3.2009 9.24751 3.49273 9.15011 3.73754 8.97501C3.98236 8.79991 4.16883 8.55521 4.27273 8.27273C4.39374 7.99853 4.42984 7.69437 4.37637 7.39947C4.3229 7.10456 4.18231 6.83244 3.97273 6.61818L3.91818 6.56364C3.74913 6.39478 3.61503 6.19425 3.52353 5.97353C3.43203 5.7528 3.38493 5.51621 3.38493 5.27727C3.38493 5.03834 3.43203 4.80174 3.52353 4.58102C3.61503 4.36029 3.74913 4.15977 3.91818 3.99091C4.08704 3.82186 4.28757 3.68775 4.50829 3.59626C4.72901 3.50476 4.96561 3.45766 5.20455 3.45766C5.44348 3.45766 5.68008 3.50476 5.9008 3.59626C6.12152 3.68775 6.32205 3.82186 6.49091 3.99091L6.54545 4.04545C6.75971 4.25503 7.03183 4.39562 7.32674 4.4491C7.62164 4.50257 7.9258 4.46647 8.2 4.34545H8.27273C8.54161 4.23022 8.77093 4.03887 8.93245 3.79497C9.09397 3.55107 9.18065 3.26526 9.18182 2.97273V2.81818C9.18182 2.33597 9.37338 1.87351 9.71435 1.53253C10.0553 1.19156 10.5178 1 11 1C11.4822 1 11.9447 1.19156 12.2856 1.53253C12.6266 1.87351 12.8182 2.33597 12.8182 2.81818V2.9C12.8193 3.19253 12.906 3.47834 13.0676 3.72224C13.2291 3.96614 13.4584 4.15749 13.7273 4.27273C14.0015 4.39374 14.3056 4.42984 14.6005 4.37637C14.8954 4.3229 15.1676 4.18231 15.3818 3.97273L15.4364 3.91818C15.6052 3.74913 15.8057 3.61503 16.0265 3.52353C16.2472 3.43203 16.4838 3.38493 16.7227 3.38493C16.9617 3.38493 17.1983 3.43203 17.419 3.52353C17.6397 3.61503 17.8402 3.74913 18.0091 3.91818C18.1781 4.08704 18.3122 4.28757 18.4037 4.50829C18.4952 4.72901 18.5423 4.96561 18.5423 5.20455C18.5423 5.44348 18.4952 5.68008 18.4037 5.9008C18.3122 6.12152 18.1781 6.32205 18.0091 6.49091L17.9545 6.54545C17.745 6.75971 17.6044 7.03183 17.5509 7.32674C17.4974 7.62164 17.5335 7.9258 17.6545 8.2V8.27273C17.7698 8.54161 17.9611 8.77093 18.205 8.93245C18.4489 9.09397 18.7347 9.18065 19.0273 9.18182H19.1818C19.664 9.18182 20.1265 9.37338 20.4675 9.71435C20.8084 10.0553 21 10.5178 21 11C21 11.4822 20.8084 11.9447 20.4675 12.2856C20.1265 12.6266 19.664 12.8182 19.1818 12.8182H19.1C18.8075 12.8193 18.5217 12.906 18.2778 13.0676C18.0339 13.2291 17.8425 13.4584 17.7273 13.7273Z"
            stroke="#667085"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap text-base text-gray-700 font-semibold">
          Simulation properties
        </span>
      </a>
      <a
        href="#"
        className="flex items-center p-2 text-sm font-normal hover:bg-gray-50 active:bg-gray-100 justify-between rounded-md"
      >
        <svg
          className="w-5 h-5 ml-2"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.13626 8.13628L3.92893 3.92896M3.92893 18.0711L8.16797 13.8321M13.8611 13.8638L18.0684 18.0711M18.0684 3.92896L13.8287 8.16862M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11ZM15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C13.2091 7 15 8.79086 15 11Z"
            stroke="#667085"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap text-base text-gray-700 font-semibold">
          Support
        </span>
      </a>
      {/* Simulation Staus */}
      <div className="flex items-center px-4 py-4 mt-2  bg-[#F9FAFB] rounded-lg">
        <div className="w-full">
          <div className="font-semibold text-sm text-[#101828]">
            Simulation status
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: projectInfo.status }}
            className="font-normal text-sm text-[#475467]"
          />
          <div className="text-center mt-2">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-[#EAECF0]">
                <div
                  style={{ width: `${projectInfo.percentage}%` }}
                  className={`rounded shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                    projectInfo.percentage < 100
                      ? "bg-gradient-to-r from-primary-600 to-primary-400 animate-loading"
                      : "bg-[#7F56D9]"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* show username and logout button */}
      <div className="my-2 flex items-center p-2 text-sm font-normal">
        <div className="relative w-full">
          <div className="text-sm font-semibold text-[#344054]">
            {userPlan || "Unknown plan"}
          </div>
          <div className="text-sm font-normal text-[#475467]">{email}</div>
          <div className="text-xs">
            <button
              onClick={() => {
                setIsLoading(true);
                Auth.signOut().then(() => {
                  localStorage.clear();
                  setIsLoading(false);
                  navigate("/", { replace: true });
                });
              }}
              className="absolute top-0 -right-1 flex items-center mx-2 py-1 text-sm font-normal rounded"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 text-white animate-spin fill-[#7f56d9]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                <>
                  <span
                    data-tooltip-id="logout-tooltip"
                    data-tooltip-content="Log out"
                  >
                    <svg
                      className="w-4 h-4"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3333 13.1667L16.5 9M16.5 9L12.3333 4.83333M16.5 9H6.5M6.5 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V12.5C1.5 13.9001 1.5 14.6002 1.77248 15.135C2.01217 15.6054 2.39462 15.9878 2.86502 16.2275C3.3998 16.5 4.09987 16.5 5.5 16.5H6.5"
                        stroke="#667085"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <Tooltip id="logout-tooltip" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <SimulationProperties
        visible={simulationPropertiesVisible}
        setVisible={setSimulationPropertiesVisible}
      />
    </footer>
  );
}

export default SidebarFooter;
