import { createContext } from "react";


interface TasksContextProps{

}


const TasksContext = createContext({} as TasksContextProps)



export function TasksContextProvider(){
	return(
		<TasksContext.Provider value={TasksContext}>

		</TasksContext.Provider>
	)
}