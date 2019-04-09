import { ActionConsts } from "@Definations";

/**
 * ACTIONS
*/
export const UserActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionConsts.User.SetReducer
	}),

	Reset : () => ({
		type: ActionConsts.User.ResetReducer
	})
}