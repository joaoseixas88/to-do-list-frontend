import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { LoginModal } from "./components/LoginModal";
import { AuthContextProvider } from "./hooks/AuthContext";

export default function App() {
  return (
		<AuthContextProvider>
			<Header/>
			<Content/>
			<LoginModal/> 
		</AuthContextProvider>
	)
}
