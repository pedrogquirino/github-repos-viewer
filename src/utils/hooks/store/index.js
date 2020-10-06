import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "../../hooks/actions";


const initialState = {
  GitRepositoryList: [],
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
