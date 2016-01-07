"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { makeAction } from "../utils/make_action";

const resetErrorMessage = makeAction(ACTION_TYPES.RESET_ERROR_MESSAGE);

export { resetErrorMessage };
