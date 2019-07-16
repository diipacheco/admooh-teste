import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 900px;
	margin-top: 30px;
	background: #fff;
	border-radius: 6px;
	padding: 20px;
`;

export const AlbumPlace = styled.div`
	width: 100%;
	max-width: 900px;
	display: flex;
	margin-top: 20px;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;

		.albumInfo {
			justify-content: space-around;
		}
	}

	@media screen and (min-width: 600px) {
		flex-direction: row;
	}
	.thumbnail img {
		min-height: 120px;
		display: flex;
	}

	.albumInfo {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 900px;
	}

	.albumInfo article {
		font-size: 20px;
		padding: 50px;
	}
`;
