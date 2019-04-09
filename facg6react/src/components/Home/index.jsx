import React, {Component} from "react";
import getData from "../../utils/getData";
import  HomeFacg from "./HomeFacg";
class Home extends Component {
    state = {
        data : {},
        error: null
    }
    componentDidMount() {
        const url = "https://api.github.com/orgs/facg6";
        getData(url)
          .then(response => {
            const error = response.error;
            if (error) {
              this.setState({ error });
            } else {
              this.setState({ data: { ...response } });
            }
          })
          .catch(e => {
            this.setState({ error: "There is error please refresh the page" });
          });
      }
      render() {
        if (!this.state.data) {
          return <h3>...Loading</h3>;
        }
        const error = this.state.error;
        if (error) {
          return <p>{error}</p>;
        }
        return (<HomeFacg data={this.state.data} />
            // <div>
            //     this.state.data
            // </div>
        
        
        )
      }
}
export default Home;