import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      pathname: pathname,
      id: null,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));        
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));        
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result: result, id: id });
    }
  }

  render() {
    const { result, error, loading, pathname, isMovie, id } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} pathname={pathname} isMovie={isMovie} id={id} />;
  }
}
