import { ActionConsts } from "@Definations";

/**
 * ACTIONS
*/
export const EntityActions = {
	Map : (payload:any) => ({
		payload,
		type: ActionConsts.Entity.SetReducer
	}),

	Reset : () => ({
		type: ActionConsts.Entity.ResetReducer
	})
}