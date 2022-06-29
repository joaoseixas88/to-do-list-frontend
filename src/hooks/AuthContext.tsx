import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { parseCookies, setCookie } from "nookies";

interface User {
  name: string;
  email: string;
}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

interface SignInProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: User;
  isAuthenticated: boolean;
  isLoginModalOpen: boolean;
  signUp(data: SignUpProps): Promise<boolean>;
  login(data: SignInProps): Promise<boolean>;
  closeLoginModal: () => void;
  openLoginModal: () => void;
  setUser: (user: User) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "todoList.token": token } = parseCookies();

    if (token) {
      api
        .get("/auth/me", {
          headers: {
            ["Authorization"]: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const {
            user: { email, name },
          } = response.data;

          setUser({ email, name });
        })
        .catch(() => {
          setUser({} as User);
        });
    }
  }, []);

  function closeLoginModal() {
    setIsLoginModalOpen(false);
  }

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  async function login(data: SignInProps) {
		
    try {
      const loginResponse = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

			
      const { accessToken } = await loginResponse.data;

      setCookie(undefined, "todoList.token", accessToken);

      const response = await api.get("/auth/me",{
				headers: {
					["Authorization"]: `Bearer ${accessToken}`
				}
			});			

      const {
				user: { email, name },
			} = response.data;

			setUser({ email, name });


			return true
    } catch (error) {
			return false
		}
  }

  async function signUp(data: SignUpProps) {
    try {
      const response = await api.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const {
        user: { name, email },
      } = response.data;

      const loginResponse = await api.post("/auth/login", {
        email,
        password: data.password,
      });

      const { accessToken } = loginResponse.data;

      setCookie(undefined, "todoList.token", accessToken);
      setUser({
        name,
        email,
      });
			return true
    } catch (error) {
			return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoginModalOpen,
        closeLoginModal,
        openLoginModal,
        isAuthenticated,
        signUp,
        setUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
