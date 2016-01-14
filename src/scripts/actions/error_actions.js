"use strict";
import * as  ActionTypes from "../constants/action_types";
import { makeAction } from "../utils/make_action";

const resetErrorMessage = makeAction(ActionTypes.RESET_ERROR_MESSAGE);

export { resetErrorMessage };
