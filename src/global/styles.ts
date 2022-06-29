import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`


	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}


  body {
    background-color:  #c5c5c5;
  }


	.modal-content{

		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
    width: 30%;
		background-color: ${({ theme }) => theme.colors.shape};
    padding: 2rem;
    position: relative;
    border-radius: 0.24rem; 
		p{
			color: ${({ theme }) => theme.colors.primaryBlue};
			a{
				cursor: pointer;
			}
		}
	
	}

	.modal-overlay{
        background: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`



