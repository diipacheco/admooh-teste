import React, { Component } from "react";
import Header from "../../Components/Header";
import * as S from "./styles";
import { Photos } from "../../Store/Ducks/Photos/types";
import * as ActionTypes from "../../Store/Ducks/Photos/actions";
import { ApplicationState } from "../../Store";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

interface StateProps {
	albums: Photos[];
}

interface DispatchProps {
	loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class PhotoList extends Component<Props> {
	componentDidMount() {
		const { loadRequest } = this.props;
		loadRequest();
	}
	render() {
		const { albums } = this.props;
		console.log(albums);
		return (
			<S.Container>
				<S.Content>
					<Header />
					{albums.map(album => (
						<S.AlbumPlace key={album.id}>
							<div className="thumbnail">
								<img src={album.thumbnailUrl} alt="Thumbnail" />
							</div>

							<div className="albumInfo">
								<article>{album.title}</article>
							</div>
						</S.AlbumPlace>
					))}
				</S.Content>
			</S.Container>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	albums: state.photos.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(ActionTypes, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoList);
