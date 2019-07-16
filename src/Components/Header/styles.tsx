import styled from "styled-components";

export const Header = styled.header`
	height: 72px;
	border-bottom: 1px solid #dddddd;
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 980px;
	margin: 0 auto;
	height: 72px;
	padding: 0 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	strong {
		padding: 10px;
		font-size: 20px;
		color: #7f8c8d;
		font-weight: lighter;
		transition: 0.2s;
	}

	@media screen and (min-width: 600px) {
		flex-direction: row;
		-webkit-flex-direction: row;
		a strong {
			-webkit-flex: 3;
			flex: 3;
		}
	}

	@media screen and (max-width: 600px) {
		-webkit-flex-direction: column;
		flex-direction: column;
	}
`;
