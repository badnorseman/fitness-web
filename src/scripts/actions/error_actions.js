"use strict";
import * as  actionTypes from "../constants/action_types";
import { makeAction } from "../utils/make_action";

const resetErrorMessage = makeAction(actionTypes.RESET_ERROR_MESSAGE);

export { resetErrorMessage };
