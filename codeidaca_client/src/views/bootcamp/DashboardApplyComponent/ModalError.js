import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

export default function ModalError(props) {
  return (
    <div>
      {props.ShowErrorModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setErrorModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-w-lg p-4 mx-auto bg-gray-50 rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationCircleIcon className="w-10 h-10 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      {props.ModalInfo.title}
                    </h4>
                    <p className="text-sm text-gray-500 max-w-xs">
                      {props.ModalInfo.message}
                    </p>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white rounded-md outline-none border bg-red-600 hover:bg-white hover:shadow-lg hover:text-gray-800 focus:ring-white focus:text-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:text-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => props.setErrorModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
